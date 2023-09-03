// Interfaces
import { Project } from "@/interfaces";

// Components
import { ProjectCard } from "@/components";

interface Props {
  projects: Project[];
}

const ProjectsList = ({ projects }: Props) => {
  console.log("[DEBUG]: projects");
  console.log(projects);

  return (
    <>
      <p className="md:text-xl font-bold mb-2 mt-4 text-zinc-600 dark:text-slate-300">
        Experience
      </p>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </>
  );
};

export { ProjectsList };
