"use client";

import Image from "next/image";

const SOCIAL_LINKS = [
  {
    name: "Email",
    href: "mailto:info@medxai-innovations.com",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/med.xai/",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/MED.xAi/",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/medxai-innovations-pvt-ltd/about/",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74V9.89H5.07v8.61h2.78Z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/medxai",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function FooterSection() {
  return (
    <footer id="footer" className="site-footer">
      <div className="container">
        
        <div className="footer-grid">

          {/* ── Column 1: Links ─────────────────────────────── */}
          <div className="footer-col">
            <h3>Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#explore">Explore</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>

          {/* ── Column 2: Brand Identity ────────────────────── */}
          <div className="footer-col" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                position: "relative",
                width: "80px",
                height: "80px",
                borderRadius: "9999px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                marginBottom: "0.75rem",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Image
                src="/images/LOGO_MEDxAI_Innovations.jpg"
                alt="MEDxAI Logo"
                fill
                style={{ objectFit: "cover" }}
                sizes="80px"
              />
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em", marginBottom: "0.25rem" }}>
              MED<span className="brand-x">x</span>AI
            </h2>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", maxWidth: "26ch", lineHeight: 1.5 }}>
              Advancing healthcare through deep-tech AI and quantum computational intelligence.
            </p>
          </div>

          {/* ── Column 3: Contact Us ────────────────────────── */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <div style={{ marginBottom: "1rem" }}>
              <a
                href="mailto:info@medxai-innovations.com"
                style={{ color: "var(--brand-gold)", fontWeight: 600, fontSize: "0.95rem", textDecoration: "underline" }}
              >
                info@medxai-innovations.com
              </a>
            </div>

            <div className="footer-socials">
              {SOCIAL_LINKS.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="social-icon-btn"
                >
                  {icon}
                </a>
              ))}
            </div>

            <div style={{ marginTop: "1.5rem", fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
              Incubated at <strong>VIT V-NEST</strong><br />
              Vellore Institute of Technology, Chennai, India
            </div>
          </div>

        </div>

        {/* ── Footer Bottom Copyright & Attribution ───────── */}
        <div className="footer-bottom">
          <div>
            Copyright &copy; 2026 MEDxAI Innovations Pvt. Ltd. All rights reserved.
          </div>
          <div>
            Designed &amp; Developed with Big Tech Clinical Standards
          </div>
        </div>

      </div>
    </footer>
  );
}
