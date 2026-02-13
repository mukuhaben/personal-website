/*
"use client";

import { useState, useRef, useEffect } from "react";
import { useRole } from "./RoleContext";

const roles = [
  {
    id: "software-developer",
    title: "Software Developer",
    description: "Full-stack applications and scalable systems.",
  },
  {
    id: "frontend",
    title: "Frontend Developer",
    description: "Modern UI architecture and responsive design.",
  },
  {
    id: "backend",
    title: "Backend Developer",
    description: "APIs and server-side architecture.",
  },
  {
    id: "ict",
    title: "ICT Officer",
    description: "Enterprise IT and systems management.",
  },
  {
    id: "instructor",
    title: "Instructor / Lecturer",
    description: "Structured programming and ICT instruction.",
  },
  {
    id: "freelance",
    title: "Freelance Developer",
    description: "Custom web solutions for clients.",
  },
];

export default function RoleSwitcher() {
  const { role, setRole } = useRole();
  const [revealed, setRevealed] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Scroll-triggered reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hire"
      ref={ref}
      className="py-20 relative overflow-hidden"
      aria-label="Role selection"
    >
      {/* Gradient glow 
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none
          ${revealed ? "opacity-40" : "opacity-0"}
        `}
        style={{
          background:
            "radial-gradient(circle at left, rgba(99,102,241,0.15), transparent 60%)",
        }}
      />

      <div
        className={`relative transition-all duration-700
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <div className="flex flex-col md:flex-row gap-6">

          {/* Main button 
          <button
            aria-expanded={revealed}
            aria-controls="role-list"
            onClick={() => setRevealed(!revealed)}
            className="text-xl font-medium hover:opacity-70 transition"
          >
            Hire me as 👉
          </button>

          {/* Roles 
          <div
            id="role-list"
            role="menu"
            className="space-y-4"
          >
            {roles.map((r, i) => {
              const active = role === r.id;

              return (
                <div
                  key={r.id}
                  className={`transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
                    ${revealed
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                    }
                  `}
                  style={{
                    transitionDelay: revealed ? `${i * 90}ms` : "0ms",
                  }}
                >
                  <button
                    role="menuitemradio"
                    aria-checked={active}
                    onClick={() =>
                      setRole(active ? null : r.id)
                    }
                    className={`role-text group flex items-center gap-2
                      ${active ? "role-active" : ""}
                    `}
                  >
                    <span
                      className={`h-2 w-2 rounded-full transition-all
                        ${active ? "bg-white scale-100" : "bg-gray-600"}
                      `}
                    />

                    <span className="relative">
                      {r.title}
                      <span className="role-underline" />
                    </span>
                  </button>

                  <p className="text-sm text-gray-500 ml-6 max-w-md">
                    {r.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
*/