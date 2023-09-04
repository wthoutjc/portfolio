import educations from "@/data/education.json";

// Components
import { EducationList } from "@/components";

const EducationPage = () => {
  return <EducationList educations={educations} />;
};

export default EducationPage;
