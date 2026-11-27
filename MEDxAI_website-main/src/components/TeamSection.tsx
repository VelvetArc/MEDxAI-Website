"use client";

import Image from "next/image";

export default function TeamSection() {
  return (
    <section id="team" className="section" style={{ backgroundColor: "#040019" }}>
      <div className="container">

        {/* ── Section Header ──────────────────────────────── */}
        <div className="section-header">
          <div className="section-tag">
            <span style={{ width: "6px", height: "6px", borderRadius: "99px", background: "var(--brand-red)" }} />
            <span>Leadership &amp; Research</span>
          </div>
          <h2 className="section-title">
            Our Team
          </h2>
          <p className="section-desc">
            Spearheaded by academic researchers and pioneers in biomedical imaging, nanoelectronics, and deep-tech clinical AI.
          </p>
        </div>

        {/* ── 2-Column Team Grid ───────────────────────────── */}
        <div className="team-grid">

          {/* ── Member 1: Dr. Sheena Christabel Pravin ──────── */}
          <div className="team-card">
            <div className="team-header-row">
              <div className="team-avatar">
                <Image
                  src="/images/dr_sheena_cropped.png"
                  alt="Dr. Sheena Christabel Pravin"
                  fill
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                  sizes="96px"
                />
              </div>
              <div>
                <h3 className="team-name">Dr. Sheena Christabel Pravin</h3>
                <span className="team-desig">CEO &amp; Co-Founder</span>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                  AI, Medical Diagnostics &amp; In-Silico Therapeutics
                </div>
              </div>
            </div>

            <div className="team-bio">
              <p style={{ marginBottom: "1rem" }}>
                Dr. Sheena Christabel Pravin is a researcher and innovator specializing in Artificial Intelligence, Machine Learning, Deep Learning, Medical Imaging, Biomedical Signal Processing, and Digital Healthcare Technologies.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Her work focuses on developing AI-driven solutions for cancer pre-screening, medical diagnostics, predictive healthcare analytics, and AI-assisted diagnostic systems. She has expertise in building machine learning and deep learning models for biomedical data analysis, medical imaging, and clinical decision support.
              </p>
              <p>
                Dr. Sheena is also engaged in in silico drug discovery, leveraging molecular docking, virtual screening, binding affinity prediction, ADMET profiling, and AI-driven molecular intelligence to accelerate therapeutic research. Her interests span precision medicine, oncology, maternal and fetal healthcare, explainable AI, computational biology, and healthcare innovation.
              </p>
            </div>
          </div>

          {/* ── Member 2: Dr. Reena Monica P ────────────────── */}
          <div className="team-card">
            <div className="team-header-row">
              <div className="team-avatar">
                <Image
                  src="/images/reena.png"
                  alt="Dr. Reena Monica P"
                  fill
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                  sizes="96px"
                />
              </div>
              <div>
                <h3 className="team-name">Dr. Reena Monica P</h3>
                <span className="team-desig">CTO &amp; Co-Founder</span>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                  PhD in Nanoelectronics &amp; Sensor Miniaturization
                </div>
              </div>
            </div>

            <div className="team-bio">
              <p style={{ marginBottom: "1rem" }}>
                Dr. Reena Monica P holds a PhD in Nanoelectronics. Her research interest is in the miniaturization of sensors and other computational Integrated Circuits (ICs).
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Her pioneering works include a Carbon Nanotube Field Effect Transistor (CNTFET) based gas sensor fabricated to detect cancer from the Volatile Organic Compounds (VOCs) in the breath of a person.
              </p>
              <p>
                Her research also encompasses an efficient filter design for a cardiac pacemaker, the physical design of complete ICs, and quantum computing-driven new material design for Green Electronics.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
