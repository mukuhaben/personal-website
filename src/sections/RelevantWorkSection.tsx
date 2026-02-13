"use client";

import { projects } from "@/data/projects";
import { useRole } from "./RoleContext";

export default function RelevantWorkSection() {
  const { role } = useRole();

  if (!role) return null;

  // Instructor view
  if (role === "instructor") {
    return (
      <section
              className="section"
              style={{
              padding: "1rem 0",
              borderTop: "1px solid var(--border-subtle)"
            }}
     >
        <div className="container">
              <h2 className="section-title">Teaching Portfolio</h2>

              <p>
                Structured curriculum development and instruction in
                programming, system design, and ICT disciplines.
                Course materials and teaching frameworks are currently
                under active development.
              </p>
          
        </div>
      </section>
    );
  }

// ICT officer role/view:

  if (role === "ict officer") {
    return (
      <section
              className="section"
              style={{
              padding: "1rem 0",
              borderTop: "1px solid var(--border-subtle)"
            }}
     >
        <div className="container">
              <h2 className="section-title">ICT officer Portfolio</h2>

              <p>
                  Beyond development, I have supported LAN infrastructure, managed
                  institutional ICT laboratories, and supervised technical capstone
                  projects — bridging systems engineering and education.Certified CCNA, Netwroking Technician with 
                  experience working for the goverment of Kenya
        
              </p>
          
        </div>
      </section>
    );
  }


  const filtered = projects.filter((p) =>
    p.roles.includes(role)
  );

  return (
    <section
      id="work"
      className="section"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
<div className="container fade-up" key={role}>
  {filtered.length === 0 ? (
    <p>
      Relevant projects for this role are currently being added.
    </p>
  ) : (
    <div className="projects-grid">
      {filtered.map((project) => (
        <div
          key={project.slug}
          className="glass card-hover"
          style={{
            padding: "2rem",
          }}
        >
          <h3 style={{ marginBottom: "0.5rem" }}>
            {project.title}
          </h3>

          <p style={{ marginBottom: "1.5rem" }}>
            {project.shortDescription}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              paddingTop: "1rem",
              borderTop: "1px solid var(--border-subtle)",
              marginBottom: "1.5rem",
            }}
          >
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            style={{
              color: "var(--accent-secondary)",
              fontWeight: 500,
            }}
          >
            View Project →
          </a>
        </div>
      ))}
    </div>
  )}
</div>

    </section>
  );
}
