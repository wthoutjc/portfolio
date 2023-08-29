// Services
import { getProject } from "@/services";

// Components
import { Project } from "@/components";

interface Props {
  params: { id: string };
}

export default async function ProjectPage({ params }: Props) {
  const { project } = await getProject(params.id);
  if (!project) return <div className="p-3">Project not found</div>;

  return <Project {...project} />;
}
