import projects from "@/data/projects.json";

// Components
import { Project } from "@/components";

interface Props {
  params: { id: string };
}

export default async function ProjectPage({ params }: Props) {
  const project = projects.find((project) => project.id === params.id);

  if (!project) throw new Error("Project not found");
  return <Project {...project} />;
}
