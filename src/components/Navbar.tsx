"use client";

import { useState } from "react";
import Link from "next/link";



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);

    return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          backdropFilter: "blur(10px)",
          background: "rgba(11, 15, 23, 0.6)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.2rem 0",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              textDecoration: "none",
            }}
          >
            
          </Link>

          {/* Desktop Links */}
                <div
              className="desktop-menu"
              style={{
                gap: "2rem",
                alignItems: "center",
              }}
            >

            <Link href="#hero" style={linkStyle}>
              Home
            </Link>
            <Link href="#work" style={linkStyle}>
              Relevant Works
            </Link>
           
           {/* Testimonials */}
<div style={{ position: "relative" }}>
  <span
    style={{ ...linkStyle, cursor: "pointer" }}
    onClick={() => setShowTestimonials(!showTestimonials)}
  >
    Testimonials
  </span>

  {showTestimonials && (
    <div
      style={{
        position: "absolute",
        top: "120%",
        right: 0,
        background: "var(--bg-panel)",
        border: "1px solid var(--border-subtle)",
        padding: "0.8rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
        minWidth: "220px",
      }}
    >
      <a
        href="/BENSON MUKUHA NGATIA ~CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Curriculum Vitae
      </a>

      <a
        href="/Academic Certificates.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Academic Certificates
      </a>

      <a
        href="/Proffesional Certificates.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Professional Certificates
      </a>
    </div>
  )}
</div>


          </div>

          {/* Mobile Hamburger */}
          <button
            className="mobile-toggle"
            onClick={() => setOpen(true)}
            style={{
              fontSize: "1.5rem",
              background: "none",
              border: "none",
              color: "var(--accent-secondary)",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Slide Panel */}
      <div
             style={{
            position: "fixed",
            top: 0,
            right: 0,
            transform: open ? "translateX(0)" : "translateX(100%)",
            width: "260px",
            height: "100vh",
            background: "var(--bg-panel)",
            backdropFilter: "blur(10px)",
            borderLeft: "1px solid var(--border-subtle)",
            padding: "2rem",
            transition: "transform 0.3s ease",
            zIndex: 1200,
          }}

      >
        {/* Close Button */}
        <div style={{ textAlign: "right", marginBottom: "2rem" }}>
          <button
            onClick={() => setOpen(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              color: "var(--accent-secondary)",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <Link href="#hero" style={mobileLinkStyle} onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="#work" style={mobileLinkStyle} onClick={() => setOpen(false)}>
           Relevant Works
          </Link>
          
         {/* Testimonials */}
<span
  style={{ ...mobileLinkStyle, cursor: "pointer" }}
  onClick={() => setShowTestimonials(!showTestimonials)}
>
  Testimonials
</span>

{showTestimonials && (
  <div style={{ paddingLeft: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
    <a
      href="/BENSON MUKUHA NGATIA ~CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      style={mobileLinkStyle}
      onClick={() => setOpen(false)}
    >
      Curriculum Vitae
    </a>

    <a
      href="/Academic Certificates.pdf"
      target="_blank"
      rel="noopener noreferrer"
      style={mobileLinkStyle}
      onClick={() => setOpen(false)}
    >
      Academic Certificates
    </a>

    <a
      href="/Proffesional Certificates.pdf"
      target="_blank"
      rel="noopener noreferrer"
      style={mobileLinkStyle}
      onClick={() => setOpen(false)}
    >
      Professional Certificates
    </a>
  </div>
)}


        </div>
      </div>

      {/* Responsive Rules */}
     <style jsx>{`
          .desktop-menu {
            display: flex;
          }

          @media (min-width: 900px) {
            .mobile-toggle {
              display: none;
            }
          }

          @media (max-width: 899px) {
            .desktop-menu {
              display: none;
            }
          }
        `}
      </style>

    </>
  );
}

const linkStyle = {
  color: "var(--accent-secondary)",
  textDecoration: "none",
  fontWeight: 500,
  transition: "opacity 0.2s ease",
};

const mobileLinkStyle = {
  color: "var(--accent-secondary)",
  textDecoration: "none",
  fontSize: "1.1rem",
};
