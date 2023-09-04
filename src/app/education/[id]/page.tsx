import educations from "@/data/education.json";

// Components
import { Education } from "@/components";

interface Props {
  params: { id: string };
}

const EducationPage = ({ params }: Props) => {
  const education = educations.find(
    (education) => String(education.id) === params.id
  );

  if (!education) throw new Error("Education not found");
  return <Education {...education} />;
};

export default EducationPage;
