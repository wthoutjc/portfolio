import projects from "@/data/projects.json";

// Components
import { ProjectsList } from "@/components";

export default async function Home() {
  return <ProjectsList projects={projects} />;
}
