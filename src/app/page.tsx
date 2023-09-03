// Components
import { ProjectsList } from "@/components";

// Services
import { getProjects } from "@/services";

export default async function Home() {
  const { projects } = await getProjects();

  if (!projects || projects.length === 0) return <h1>No projects found</h1>;
  return <ProjectsList projects={projects} />;
}
