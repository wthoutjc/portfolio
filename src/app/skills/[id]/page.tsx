import skills from "@/data/skills.json";

// Components
import { Skill } from "@/components";

interface Props {
  params: { id: string };
}

const ProjectPage = ({ params }: Props) => {
  const skill = skills.find((skill) => skill.id === params.id);

  if (!skill) throw new Error("Project not found");
  return <Skill {...skill} />;
};

export default ProjectPage;
