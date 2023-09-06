import projects from "@/data/projects.json";

// Components
import { ProjectsList } from "@/components";

export default function Home() {
  return <ProjectsList projects={projects} />;
}
