// Components
import { ProjectsList } from "@/components";

// Services
import { getProjects } from "@/services";

export default async function Home() {
  const { projects } = await getProjects();


  console.log("[DEBUG]: projects");
  console.log(projects);
  

  return <ProjectsList projects={projects} />;
}
