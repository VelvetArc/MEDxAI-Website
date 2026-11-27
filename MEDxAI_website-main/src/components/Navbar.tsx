"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container">
        <div className="header-inner">

          {/* ── Brand Logo ──────────────────────────────────── */}
          <Link href="#home" className="brand-wrap">
            <div
              style={{
                position: "relative",
                width: "36px",
                height: "36px",
                borderRadius: "9999px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                flexShrink: 0,
              }}
            >
              <Image
                src="/images/LOGO_MEDxAI_Innovations.jpg"
                alt="MEDxAI Logo"
                fill
                style={{ objectFit: "cover" }}
                sizes="36px"
              />
            </div>
            <span className="brand-title">
              MED<span className="brand-x">x</span>AI
            </span>
            <span className="brand-tag">Innovations</span>
          </Link>

          {/* ── Desktop Nav Links ───────────────────────────── */}
          <nav aria-label="Main Navigation">
            <ul
              id="main-navigation"
              className={`nav-menu${menuOpen ? " is-open" : ""}`}
            >
              <li><a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#explore" className="nav-link" onClick={() => setMenuOpen(false)}>Explore</a></li>
              <li><a href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</a></li>
              <li><a href="#team" className="nav-link" onClick={() => setMenuOpen(false)}>Team</a></li>
              <li><a href="#footer" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>

          {/* ── Action CTA ──────────────────────────────────── */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a href="#footer" className="btn-primary">
              Get in touch
            </a>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
              style={{
                display: "none",
                padding: "0.5rem",
                color: "#ffffff",
                cursor: "pointer",
              }}
              className="mobile-burger"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
