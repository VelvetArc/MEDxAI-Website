"use client";

import { useEffect, useRef } from "react";

// ─── Google Antigravity Specifications Matrix ────────────────
// Derived from https://antigravity.google/ (data-ring-width="0.15",
// data-ring-width2="0.05", data-ring-displacement="0.23", data-density="220", data-particles-scale="0.65")
const CONFIG = {
  ringDensity: 240,            // Number of ring particles
  ambientCount: 45,            // Floating upward drift particles
  ringWidth: 0.15,             // Major radial spread ratio
  ringWidth2: 0.05,            // Secondary band thickness
  ringDisplacement: 0.23,      // Harmonic wave displacement
  particlesScale: 0.65,        // Scale multiplier
  tiltAngle: (68 * Math.PI) / 180, // Perspective tilt (~68 deg)
  rotationSpeed: 0.0035,       // Orbital velocity
  antigravityVy: -0.09,        // Ambient upward drift
  cursorRadius: 110,           // Repulsion radius
  cursorStrength: 0.05,        // Spring repulsion coefficient
};

// Authentic MEDxAI Starlight & Crimson Palette (From https://www.medxai-innovations.com/)
const COLOR_WHITE    = "rgba(255, 255, 255,"; // High-contrast starlight
const COLOR_SILVER   = "rgba(220, 226, 235,"; // Crisp cosmic silver
const COLOR_RED      = "rgba(230, 44, 44,";   // #e62c2c (brand crimson x)
const COLOR_DEEP_RED = "rgba(165, 29, 29,";   // #a51d1d (--prim-red)
const COLOR_ROSE     = "rgba(218, 120, 120,"; // #da7878 (accent rose)
const COLOR_GOLD     = "rgba(247, 201, 91,";  // #f7c95b (subtle warm accent, <10%)

const RING_COLORS = [
  COLOR_WHITE,
  COLOR_WHITE,
  COLOR_SILVER,
  COLOR_SILVER,
  COLOR_RED,
  COLOR_DEEP_RED,
  COLOR_ROSE,
  COLOR_GOLD,
];

interface RingParticle {
  angle: number;               // Current orbital angle theta (0..2PI)
  baseRadiusOffset: number;    // Offset from major radius R
  zOffset: number;             // Vertical offset in 3D
  speed: number;               // Angular velocity
  color: string;
  baseSize: number;
  displacementPhase: number;   // Unique phase for wave displacement
  dispX: number;               // Dynamic impulse displacement
  dispY: number;
}

interface AmbientParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  radius: number;
  life: number;
  maxLife: number;
  color: string;
}

interface BurstParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  radius: number;
  life: number;
  maxLife: number;
  color: string;
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999, targetX: 0, targetY: 0, currentX: 0, currentY: 0 });
  const ringParticles = useRef<RingParticle[]>([]);
  const ambientParticles = useRef<AmbientParticle[]>([]);
  const burstParticles = useRef<BurstParticle[]>([]);
  const rafId = useRef<number>(0);
  const timeRef = useRef<number>(0);

  // ── Spawn Ambient Particle ─────────────────────────────────
  const spawnAmbient = (width: number, height: number): AmbientParticle => {
    const col = [COLOR_WHITE, COLOR_SILVER, COLOR_RED, COLOR_ROSE][Math.floor(Math.random() * 4)];
    return {
      x: rand(0, width),
      y: rand(0, height),
      vx: rand(-0.15, 0.15),
      vy: CONFIG.antigravityVy + rand(-0.05, 0.02),
      alpha: rand(0.2, 0.6),
      radius: rand(0.9, 2.0) * CONFIG.particlesScale,
      life: 0,
      maxLife: rand(180, 360),
      color: col,
    };
  };

  // ── Spawn Click Burst ──────────────────────────────────────
  const spawnBurst = (x: number, y: number): BurstParticle[] => {
    return Array.from({ length: 16 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = rand(1.5, 4.2);
      const col = [COLOR_GOLD, COLOR_RED, COLOR_WHITE][Math.floor(Math.random() * 3)];
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + CONFIG.antigravityVy * 4,
        alpha: 0.95,
        radius: rand(1.2, 2.8) * CONFIG.particlesScale,
        life: 0,
        maxLife: rand(45, 80),
        color: col,
      };
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isLowPowerDevice = (navigator.hardwareConcurrency || 8) <= 4 || width < 600;
    let isRunning = false;

    const stop = () => {
      isRunning = false;
      cancelAnimationFrame(rafId.current);
    };

    const start = () => {
      if (!isRunning && !motionQuery.matches && !document.hidden) {
        isRunning = true;
        rafId.current = requestAnimationFrame(draw);
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    // ── Seed Google Antigravity Ring Particles ───────────────
    const ringDensity = isLowPowerDevice ? Math.floor(CONFIG.ringDensity * 0.6) : CONFIG.ringDensity;
    const ambientCount = isLowPowerDevice ? Math.floor(CONFIG.ambientCount * 0.6) : CONFIG.ambientCount;

    ringParticles.current = Array.from({ length: ringDensity }, (_, i) => {
      const isInnerBand = Math.random() < 0.45;
      const widthSpread = isInnerBand ? CONFIG.ringWidth2 : CONFIG.ringWidth;
      const color = RING_COLORS[Math.floor(Math.random() * RING_COLORS.length)];
      return {
        angle: (i / ringDensity) * Math.PI * 2 + rand(-0.02, 0.02),
        baseRadiusOffset: rand(-widthSpread, widthSpread),
        zOffset: rand(-12, 12),
        speed: CONFIG.rotationSpeed * rand(0.85, 1.15),
        color,
        baseSize: rand(1.2, 2.6) * CONFIG.particlesScale,
        displacementPhase: Math.random() * Math.PI * 2,
        dispX: 0,
        dispY: 0,
      };
    });

    // ── Seed Ambient Upward Particles ────────────────────────
    ambientParticles.current = Array.from({ length: ambientCount }, () =>
      spawnAmbient(width, height)
    );

    // ── Mouse & Touch Listeners ──────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      // Parallax target (normalized -1 to 1)
      mouse.current.targetX = (e.clientX - width / 2) / (width / 2);
      mouse.current.targetY = (e.clientY - height / 2) / (height / 2);
    };

    const onClick = (e: MouseEvent) => {
      burstParticles.current.push(...spawnBurst(e.clientX, e.clientY));
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("click", onClick, { passive: true });

    // ── Render Loop ──────────────────────────────────────────
    const draw = () => {
      timeRef.current += 0.016;
      const t = timeRef.current;

      ctx.clearRect(0, 0, width, height);

      // Smooth camera parallax tilt (spring lag)
      mouse.current.currentX += (mouse.current.targetX - mouse.current.currentX) * 0.06;
      mouse.current.currentY += (mouse.current.targetY - mouse.current.currentY) * 0.06;

      const parallaxTiltX = mouse.current.currentY * 0.12;
      const parallaxTiltY = mouse.current.currentX * 0.15;
      const effectiveTilt = CONFIG.tiltAngle + parallaxTiltX;

      // Ring focal center: aligned behind the Hero MEDxAI headline
      const centerX = width / 2;
      const centerY = Math.min(height * 0.44, 480);
      const majorRadius = Math.min(Math.max(width * 0.32, 240), 460);

      // ── 1. Render Google Antigravity 3D Particle Ring ───────
      // We project each 3D point (X, Y, Z) into 2D with depth sorting
      interface Projected {
        screenX: number;
        screenY: number;
        z: number;
        size: number;
        alpha: number;
        color: string;
      }

      const projectedList: Projected[] = [];

      for (let i = 0; i < ringParticles.current.length; i++) {
        const p = ringParticles.current[i];

        // Orbit update
        p.angle += p.speed;
        if (p.angle > Math.PI * 2) p.angle -= Math.PI * 2;

        // Harmonic wave displacement (as specified in antigravity data-ring-displacement)
        const wave =
          Math.sin(p.angle * 3 + t * 1.5 + p.displacementPhase) *
          (CONFIG.ringDisplacement * majorRadius * 0.14);
        const r = majorRadius * (1 + p.baseRadiusOffset) + wave;

        // 3D coordinates on tilted ring with parallax tilt
        const x3d = r * Math.cos(p.angle);
        const y3d = r * Math.sin(p.angle) * Math.cos(effectiveTilt) - p.zOffset * Math.sin(effectiveTilt);
        const z3d = r * Math.sin(p.angle) * Math.sin(effectiveTilt) + p.zOffset * Math.cos(effectiveTilt);

        // Apply dynamic mouse repulsion impulse
        const screenX = centerX + x3d + p.dispX + parallaxTiltY * 40;
        const screenY = centerY + y3d + p.dispY;

        // Cursor repulsion physics
        const dx = screenX - mouse.current.x;
        const dy = screenY - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.cursorRadius && dist > 0) {
          const force = ((CONFIG.cursorRadius - dist) / CONFIG.cursorRadius) * CONFIG.cursorStrength;
          p.dispX += (dx / dist) * force * 18;
          p.dispY += (dy / dist) * force * 18;
        }

        // Spring friction recovery back to orbital plane
        p.dispX *= 0.92;
        p.dispY *= 0.92;

        // Depth perspective calculation (-majorRadius to +majorRadius)
        const normalizedZ = z3d / majorRadius; // -1 (back) to +1 (front)
        const depthAlpha = 0.28 + (normalizedZ + 1) * 0.35; // 0.28..0.98
        const depthSize = p.baseSize * (0.8 + (normalizedZ + 1) * 0.28);

        projectedList.push({
          screenX,
          screenY,
          z: z3d,
          size: depthSize,
          alpha: Math.min(Math.max(depthAlpha, 0.15), 1.0),
          color: p.color,
        });
      }

      // Sort by Z for proper 3D rendering (back to front)
      projectedList.sort((a, b) => a.z - b.z);

      // Draw projected ring particles with specular glow
      for (let i = 0; i < projectedList.length; i++) {
        const pt = projectedList[i];
        ctx.beginPath();
        ctx.arc(pt.screenX, pt.screenY, pt.size, 0, Math.PI * 2);
        ctx.fillStyle = `${pt.color} ${pt.alpha.toFixed(3)})`;
        ctx.fill();

        // Subtle specular glow for front-most particles
        if (pt.z > majorRadius * 0.35) {
          ctx.beginPath();
          ctx.arc(pt.screenX, pt.screenY, pt.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = pt.color === COLOR_RED
            ? `rgba(230, 44, 44, ${(pt.alpha * 0.2).toFixed(3)})`
            : `rgba(255, 255, 255, ${(pt.alpha * 0.15).toFixed(3)})`;
          ctx.fill();
        }
      }

      // ── 2. Render Ambient Antigravity Upward Drift ──────────
      const activeAmbient: AmbientParticle[] = [];
      for (let i = 0; i < ambientParticles.current.length; i++) {
        const ap = ambientParticles.current[i];
        ap.life++;
        const progress = ap.life / ap.maxLife;
        const currentAlpha = ap.alpha * Math.sin(progress * Math.PI);

        // Apply motion
        ap.x += ap.vx;
        ap.y += ap.vy;
        ap.vy += CONFIG.antigravityVy * 0.04; // subtle buoyant pull

        // Screen wrap
        if (ap.x < -10) ap.x = width + 10;
        if (ap.x > width + 10) ap.x = -10;
        if (ap.y < -10) ap.y = height + 10;
        if (ap.y > height + 10) ap.y = -10;

        if (currentAlpha > 0.02) {
          ctx.beginPath();
          ctx.arc(ap.x, ap.y, ap.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${ap.color} ${currentAlpha.toFixed(3)})`;
          ctx.fill();
        }

        if (ap.life < ap.maxLife) {
          activeAmbient.push(ap);
        } else {
          activeAmbient.push(spawnAmbient(width, height));
        }
      }
      ambientParticles.current = activeAmbient;

      // ── 3. Render Click Bursts ─────────────────────────────
      burstParticles.current = burstParticles.current.filter((bp) => {
        bp.life++;
        const prog = bp.life / bp.maxLife;
        const bAlpha = bp.alpha * (1 - prog);

        bp.x += bp.vx;
        bp.y += bp.vy;
        bp.vy += CONFIG.antigravityVy * 0.2;
        bp.vx *= 0.97;
        bp.vy *= 0.97;

        if (bAlpha > 0.02) {
          ctx.beginPath();
          ctx.arc(bp.x, bp.y, bp.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${bp.color} ${bAlpha.toFixed(3)})`;
          ctx.fill();
        }

        return bp.life < bp.maxLife;
      });

      if (isRunning) {
        rafId.current = requestAnimationFrame(draw);
      }
    };

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };

    const onMotionPreferenceChange = () => {
      if (motionQuery.matches) stop();
      else start();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    motionQuery.addEventListener("change", onMotionPreferenceChange);
    start();

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      motionQuery.removeEventListener("change", onMotionPreferenceChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        mixBlendMode: "screen",
      }}
    />
  );
}
