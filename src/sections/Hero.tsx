"use client";

import { useState, useEffect } from "react";
import { useRole } from "@/sections/RoleContext";

const roles = [
  {
    key: "developer",
    label: "FullStack Software Developer",
    description:
      "Full-stack applications, scalable backend systems, payment integrations and production-ready deployments."
  },
  {
    key: "instructor",
    label: "Technical Instructor & Lecturer",
    description:
      "Curriculum design, Teaching programming and ICT disciplines with structured, industry-aligned learning approaches, mentoring capstone projects and bridging engineering with education."
  },
  {
    key: "ICT Officer",
    label: "ICT Officer",
    description:
      "Supporting enterprise systems, infrastructure operations, and organizational IT environments."
  },
  {
    key: "backend",
    label: "Backend Developer",
    description:
      "Database architecture, APIs, system design, authentication, infrastructure and performance optimization."
  },
  {
    key: "freelance",
    label: "Freelance Software Developer",
    description:
      "Delivering custom web solutions and business platforms for real-world clients."
  },
  {
    key: "architect",
    label: "Systems Architect",
    description:
      "Designing modular, maintainable systems aligned with enterprise needs and long-term scalability."
  }
];

export default function Hero() {
  const { setRole } = useRole();
  const [isOpen, setIsOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkScreen = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkScreen();
  window.addEventListener("resize", checkScreen);
  return () => window.removeEventListener("resize", checkScreen);
}, []);



  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const activeHeroRole = roles[heroIndex];

  const handleRoleClick = (key: string) => {
    setRole(key);
    setIsOpen(false);
  };

  return (
    <section className="section" style={{ paddingTop: "7rem" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center"
          }}
          className="hero-grid"
        >
          {/* LEFT */}
          <div>
            <h1 className="accent-glow">
              Benson Ngatia
            </h1>

            <p style={{ marginTop: "1.5rem", fontSize: "1.15rem" }}>
              Building production systems and teaching applied technology.
            </p>

            {/* HIRE ME AS */}
            <div
              style={{
                marginTop: "3rem",
                position: "relative",
                display: "inline-block"
              }}
            >
              <button
                onClick={() => setIsOpen((v) => !v)}
                style={{
                  padding: "1rem 2rem",
                  background:
                    "linear-gradient(135deg, #4f46e5, #14b8a6)",
                  borderRadius: "30px",
                  border: "none",
                  fontWeight: 600,
                  cursor: "pointer",
                  color: "white"
                }}
              >
                Hire me as →
              </button>

              {/* DROPDOWN */}
              <div
                style={{
                  position: "absolute",
                  top: isMobile ? "100%" : "0",
                  left: isMobile ? "0" : "100%",
                  marginTop: isMobile ? "12px" : "0",
                  marginLeft: isMobile ? "0" : "12px",


                  opacity: isOpen ? 1 : 0,
                  transform: isOpen
                    ? "translateY(0)"
                    : "translateY(-8px)",
                  pointerEvents: isOpen ? "auto" : "none",
                  transition: "opacity 0.25s ease, transform 0.25s ease",

                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",

                  background: "rgba(15, 23, 42, 0.95)",
                  padding: "1rem",
                  borderRadius: "12px",
                  backdropFilter: "blur(8px)",
                  minWidth: "240px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  zIndex: 20
                }}
              >
                {roles.map((r, i) => (
                  <button
                    key={r.key}
                    onClick={() => handleRoleClick(r.key)}
                    className={isOpen ? "animate-slideInLeft" : ""}
                    style={{
                      animationDelay: `${i * 100}ms`,
                      padding: "0.6rem 1rem",
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "transparent",
                      color: "white",
                      textAlign: "left",
                      transition: "0.2s ease"
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.08)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "transparent")
                    }
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            key={heroIndex}
            style={{
              minHeight: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem"
            }}
          >
            <h3 style={{ fontSize: "1.8rem", fontWeight: 700 }}>
              {activeHeroRole.label}
            </h3>

            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                maxWidth: "100%"
              }}
            >
              {activeHeroRole.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
