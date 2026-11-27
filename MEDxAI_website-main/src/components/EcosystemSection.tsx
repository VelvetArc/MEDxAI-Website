"use client";

import Image from "next/image";

export default function EcosystemSection() {
  return (
    <section id="explore" className="section" style={{ backgroundColor: "#020013" }}>
      <div className="container">

        {/* ── Section Header ──────────────────────────────── */}
        <div className="section-header">
          <div className="section-tag">
            <span style={{ width: "6px", height: "6px", borderRadius: "99px", background: "var(--brand-red)" }} />
            <span>Values, Expertise, &amp; Partnerships</span>
          </div>
          <h2 className="section-title">
            The MED<span className="brand-x">x</span>AI Ecosystem
          </h2>
          <p className="section-desc">
            Holistic patient-centric care, multi-modal clinical intelligence, and academic-industry research alliances.
          </p>
        </div>

        {/* ── 3-Card Ecosystem Grid ────────────────────────── */}
        <div className="ecosystem-grid">

          {/* ── Card 1: Our Philosophy ─────────────────────── */}
          <div className="ecosystem-card">
            <div className="ecosystem-image">
              <Image
                src="/images/med-1.png"
                alt="Our Philosophy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="ecosystem-body">
              <div>
                <h3 className="ecosystem-title">Our Philosophy</h3>
                <p className="ecosystem-text">
                  At MEDxAI Innovations, our philosophy is centred around personalized care that addresses the unique needs of each patient. We believe in taking a holistic approach to healthcare that considers the physical, emotional, and mental wellbeing of our patients.
                </p>
              </div>
              <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--brand-gold)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Holistic Patient Care
                </span>
              </div>
            </div>
          </div>

          {/* ── Card 2: Our Services ───────────────────────── */}
          <div className="ecosystem-card">
            <div className="ecosystem-image">
              <Image
                src="/images/stock.jpg"
                alt="Our Services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="ecosystem-body">
              <div>
                <h3 className="ecosystem-title">Our Services</h3>
                <p className="ecosystem-text" style={{ marginBottom: "1rem" }}>
                  Pioneering clinical platforms combining artificial intelligence, digital diagnostics, and molecular drug discovery:
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.95rem" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>&bull;</span>
                    <div>
                      <strong style={{ color: "#ffffff" }}>Cervilens™:</strong>{" "}
                      <span style={{ color: "var(--text-secondary)" }}>AI-powered digital colposcope</span>
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>&bull;</span>
                    <div>
                      <strong style={{ color: "#ffffff" }}>Drug Discovery:</strong>{" "}
                      <span style={{ color: "var(--text-secondary)" }}>Quantum PharmX™ Molecular Intelligence Suite</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)" }}>
                <a href="#services" style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ffffff", display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                  <span>View Services</span> <span style={{ color: "var(--brand-red)" }}>&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* ── Card 3: Our Collaborators ──────────────────── */}
          <div className="ecosystem-card">
            <div className="ecosystem-image">
              <Image
                src="/images/med-3.jpg"
                alt="Our Collaborators"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="ecosystem-body">
              <div>
                <h3 className="ecosystem-title">Our Collaborators</h3>
                <p className="ecosystem-text" style={{ marginBottom: "1rem" }}>
                  Partnering with leading diagnostic centers, research institutions, and engineering providers:
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <span style={{ color: "var(--text-muted)", marginTop: "2px" }}>&bull;</span>
                    <div>
                      <strong style={{ color: "#ffffff", fontWeight: 600 }}>MediScan Fetal Medicine Center</strong>
                      <span style={{ display: "block", fontSize: "0.75rem", color: "var(--brand-rose)", letterSpacing: "0.04em", textTransform: "uppercase", marginTop: "1px" }}>Clinical Lead</span>
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "var(--text-muted)" }}>&bull;</span>
                    <span>OmniActive Health Technology</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "var(--text-muted)" }}>&bull;</span>
                    <span>BOT Systems, USA</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "var(--text-muted)" }}>&bull;</span>
                    <span>Shnorh Inc</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "var(--text-muted)" }}>&bull;</span>
                    <span>Green Ocean Technologies</span>
                  </li>
                </ul>
              </div>
              <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Clinical Alliances
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
