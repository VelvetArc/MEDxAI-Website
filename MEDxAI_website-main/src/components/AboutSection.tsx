"use client";

export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ backgroundColor: "#040019" }}>
      <div className="container">
        
        <div className="about-grid">
          
          {/* Left Column: Ambient Diagnostic Visual Card */}
          <div className="about-visual-card">
            <div className="about-mesh-glow" />

            <div style={{ position: "relative", zIndex: 10, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "20px",
                  background: "rgba(7, 0, 32, 0.9)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  boxShadow: "0 0 30px rgba(230, 44, 44, 0.15)",
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693l-1.57-.393m15.6 0l1.11 3.33a2.25 2.25 0 01-2.134 2.96H5.224a2.25 2.25 0 01-2.134-2.96l1.11-3.33" />
                </svg>
              </div>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>
                Healthcare &times; AI
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: "28ch", lineHeight: 1.6 }}>
                Bridging academic computational intelligence with tangible clinical patient outcomes.
              </p>

              <div className="about-stat-box">
                <div>
                  <span style={{ display: "block", fontSize: "1.5rem", fontWeight: 900, color: "var(--brand-gold)" }}>2023</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Founded</span>
                </div>
                <div style={{ width: "1px", height: "36px", background: "var(--border-subtle)" }} />
                <div>
                  <span style={{ display: "block", fontSize: "1.5rem", fontWeight: 900, color: "#ffffff" }}>VIT V-NEST</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Chennai, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Story & Mission */}
          <div>
            <div className="section-tag">
              <span style={{ width: "6px", height: "6px", borderRadius: "99px", background: "var(--brand-red)" }} />
              <span>Who we are</span>
            </div>

            <h2 className="section-title">
              About Us
            </h2>

            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              <strong style={{ color: "#ffffff" }}>MEDxAI Innovations</strong> is a company at the forefront of using the latest
              advancements in Artificial Intelligence to tackle some of healthcare&apos;s most pressing challenges.
              Our team is on a mission to revolutionize the way we diagnose, treat, and ultimately, experience healthcare.
            </p>

            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              We believe that AI has the potential to unlock a golden age of medicine, and we&apos;re at the forefront of making it a reality.
              Through automated multi-modal lesion classification and quantum molecular docking, we assist clinicians with quantified precision.
            </p>

            <div>
              <a href="#footer" className="btn-primary" style={{ padding: "0.85rem 2rem" }}>
                Get in touch &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
