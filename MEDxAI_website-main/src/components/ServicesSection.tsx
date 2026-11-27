"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ServicesSection() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);
  const previousOverflow = useRef("");

  const openModal = (src: string) => {
    lastFocusedElement.current = document.activeElement as HTMLElement | null;
    previousOverflow.current = document.body.style.overflow;
    setModalImage(src);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = previousOverflow.current;
    lastFocusedElement.current?.focus();
  };

  useEffect(() => {
    if (modalImage) {
      closeButtonRef.current?.focus();
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key !== "Tab" || !modalImage) return;

      const focusableElements = Array.from(
        document.querySelectorAll<HTMLElement>(
          ".lightbox-overlay button, .lightbox-overlay [tabindex]:not([tabindex=\"-1\"])"
        )
      );
      if (focusableElements.length === 0) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (!modalImage) {
        document.body.style.overflow = previousOverflow.current;
      }
    };
  }, [modalImage]);

  useEffect(() => () => {
    document.body.style.overflow = previousOverflow.current;
  }, []);

  return (
    <section id="services" className="section" style={{ backgroundColor: "#020013" }}>
      <div className="container">

        {/* ── Section Header ──────────────────────────────── */}
        <div className="section-header">
          <div className="section-tag">
            <span style={{ width: "6px", height: "6px", borderRadius: "99px", background: "var(--brand-red)" }} />
            <span>Diagnostics &amp; Drug Discovery</span>
          </div>
          <h2 className="section-title">
            Services we offer
          </h2>
          <p className="section-desc">
            Clinical-grade cervical cancer screening and quantum-assisted molecular discovery platforms.
          </p>
        </div>

        {/* ── Services Grid (2 Columns) ───────────────────── */}
        <div className="services-grid">

          {/* ── Service 1: Cervilens™ ──────────────────────── */}
          <div className="service-card">
            <div>
              {/* Image Preview with Zoom Lightbox Trigger */}
              <div
                className="service-media"
                onClick={() => openModal("/images/cervilens.png")}
                role="button"
                tabIndex={0}
                aria-label="Zoom Cervilens flyer"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openModal("/images/cervilens.png");
                }}
              >
                <Image
                  src="/images/cervilens.png"
                  alt="Cervilens Flyer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
                <div className="service-zoom-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>

              <h3 className="service-card-title">Cervilens™</h3>
              <h4 className="service-card-sub">AI-Powered Cervical Cancer Screening System</h4>
              <p className="service-card-desc">
                A dynamically adaptive cervical lesion risk assessment system designed to empower hospitals and transform women&apos;s healthcare.
                By combining AI-assisted diagnostic colposcopy and cytology with a HIPAA-compliant multi-modal fusion engine, Cervilens™ delivers smarter screening, better outcomes, and lower costs.
              </p>
            </div>

            <div className="service-card-footer" style={{ paddingTop: "1.5rem", borderTop: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <button
                onClick={() => openModal("/images/cervilens.png")}
                className="btn-outline"
                style={{ fontSize: "0.85rem", padding: "0.55rem 1.25rem" }}
              >
                Inspect Clinical Flyer &rarr;
              </button>
              <span className="service-compliance" style={{ fontSize: "0.75rem", color: "var(--brand-gold)", fontWeight: 700, textTransform: "uppercase" }}>
                HIPAA &amp; ISO Compliant
              </span>
            </div>
          </div>

          {/* ── Service 2: Quantum PharmX™ ─────────────────── */}
          <div className="service-card">
            <div>
              {/* Image Preview with Zoom Lightbox Trigger */}
              <div
                className="service-media"
                onClick={() => openModal("/images/quantum-pharmx.jpg")}
                role="button"
                tabIndex={0}
                aria-label="Zoom Quantum PharmX flyer"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openModal("/images/quantum-pharmx.jpg");
                }}
              >
                <Image
                  src="/images/quantum-pharmx.jpg"
                  alt="Quantum PharmX Flyer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
                <div className="service-zoom-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>

              <a
                href="https://quantum-pharmx-jjea.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <h3 className="service-card-title" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span>Quantum PharmX™</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </h3>
              </a>
              <h4 className="service-card-sub">Molecular Intelligence Suite</h4>
              <p className="service-card-desc">
                Revolutionizing drug discovery through quantum intelligence. Our suite leverages data-driven decisions to accelerate therapeutic research, ensuring better efficacy, safety, and success in lead optimization.
              </p>

              {/* Responsive Embedded Video Player */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                  marginTop: "1.5rem",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <iframe
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                  src="https://drive.google.com/file/d/1VaZBZGNlN98Ezij-Ndrp01UeAJEcyxuG/preview"
                  title="Quantum PharmX Video Demo"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>

            <div style={{ paddingTop: "1.5rem", borderTop: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1.5rem" }}>
              <a
                href="https://quantum-pharmx-jjea.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: "0.85rem", padding: "0.55rem 1.25rem" }}
              >
                Launch Live Suite &rarr;
              </a>
              <button
                onClick={() => openModal("/images/quantum-pharmx.jpg")}
                style={{ fontSize: "0.85rem", color: "var(--text-secondary)", cursor: "pointer" }}
              >
                View Flyer
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* ── Accessible Modal Lightbox ─────────────────────── */}
      {modalImage && (
        <div
          className="lightbox-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Product flyer preview"
        >
          <button ref={closeButtonRef} className="lightbox-close" onClick={closeModal} aria-label="Close modal">&times;</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={modalImage}
              alt="Enlarged Product Flyer"
              width={1200}
              height={800}
              sizes="90vw"
              style={{ maxWidth: "90vw", maxHeight: "85vh", width: "auto", height: "auto", objectFit: "contain", display: "block" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
