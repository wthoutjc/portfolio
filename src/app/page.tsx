// Components
import { ProjectsList } from "@/components";

// Services
import { getProjects } from "@/services";

export default async function Home() {
  const { projects } = await getProjects();
  return <ProjectsList projects={projects} />;
}
