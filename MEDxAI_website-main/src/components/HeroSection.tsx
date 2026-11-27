"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    heroRef.current.style.opacity = "0";
    heroRef.current.style.transform = "translateY(20px)";
    heroRef.current.style.transition = "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
    requestAnimationFrame(() => {
      if (heroRef.current) {
        heroRef.current.style.opacity = "1";
        heroRef.current.style.transform = "translateY(0)";
      }
    });
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* ── Ambient Radial Glow Cones ─────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(230, 44, 44, 0.12) 0%, rgba(165, 29, 29, 0.04) 50%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" ref={heroRef}>
        {/* Eyebrow Pill */}
        <div className="hero-pill">
          <span style={{ width: "6px", height: "6px", borderRadius: "99px", background: "var(--brand-red)" }} />
          <span>Advancing Healthcare Through AI</span>
        </div>

        {/* Display Headline */}
        <h1 className="hero-title">
          MED<span className="brand-x">x</span>AI
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Building indigenous clinical-grade deep learning systems that deliver sub-visual diagnostic precision
          and quantum-assisted in-silico molecular drug discovery.
        </p>

        {/* Action CTAs */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#services" className="btn-primary" style={{ padding: "0.85rem 2rem", fontSize: "1rem" }}>
            Explore Services &rarr;
          </a>
          <a href="#explore" className="btn-outline" style={{ padding: "0.85rem 2rem", fontSize: "1rem" }}>
            The Ecosystem
          </a>
        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="scroll-indicator">
          <a href="#about" aria-label="Scroll down to About section" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
            <span>Scroll</span>
            <div className="scroll-mouse" />
          </a>
        </div>
      </div>
    </section>
  );
}
