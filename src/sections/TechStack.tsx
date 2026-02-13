const stack = {
  Frontend: ["React", "TypeScript", "JavaScript", "Nextjs", "HTML5", "CSS3", "Bootstrap"],
  Backend: ["Node.js", "Express", "REST APIs"],
  Database: ["SQL", "MySQL", "PostgreSQL"],
  Tools: ["Git", "GitLab", "Postman", "VS Code"],
  Cloud: ["Oracle Cloud Infrastructure (Foundational)", "Deployment Support"],
};

export default function TechStack() {
  return (
    <section className="py-16 border-t border-gray-800">
      <h2 className="text-3xl font-bold mb-10">Technical Stack</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {Object.entries(stack).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <ul className="space-y-2 text-gray-400">
              {items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
