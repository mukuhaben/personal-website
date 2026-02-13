import { notFound } from "next/navigation";
import { projects } from "@/data/projects";



interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <section className="max-w-4xl">
      
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      

      
      <p className="text-gray-400 mb-10 leading-relaxed">
        {project.overview}
      </p>
      

      
      {project.problem && (
        
          <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Problem</h2>
          <p className="text-gray-400 leading-relaxed">
            {project.problem}
          </p>
        </div>
        
      )}

      {project.architecture && (
        <div className="mb-10">
       
            <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
          <p className="text-gray-400 leading-relaxed">
            {project.architecture}
          </p>
         
        </div>
      )}

      {project.challenges && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Engineering Challenges
          </h2>
          <p className="text-gray-400 leading-relaxed">
            {project.challenges}
          </p>
        </div>
      )}

      {project.role && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">My Role</h2>
          <p className="text-gray-400 leading-relaxed">
            {project.role}
          </p>
        </div>
      )}

      {project.impact && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            What This Demonstrates
          </h2>
          <p className="text-gray-400 leading-relaxed">
            {project.impact}
          </p>
        </div>
      )}


      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Core Features</h2>
        <ul className="space-y-2 text-gray-400">
          {project.features.map((feature) => (
            <li key={feature}>• {feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="space-y-2 text-gray-400">
          {project.tech.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-md hover:opacity-90 transition"
      >
        View Live Project
      </a>
    </section>
  );
}
