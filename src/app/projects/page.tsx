import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section>
      <FadeIn>
        <h1 className="text-4xl font-bold mb-10">
          Projects & Case Studies
        </h1>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.1}>
            <Link
              href={`/projects/${project.slug}`}
              className="block p-6 border border-gray-800 rounded-lg 
                         hover:border-gray-600 hover:scale-[1.02] 
                         transition-transform transition-colors duration-300"
            >
              <h2 className="text-xl font-semibold mb-3">
                {project.title}
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed">
                {project.shortDescription}
              </p>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
