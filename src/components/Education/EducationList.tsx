// Components
import { EducationCard } from "@/components";

// Interfaces
import { Education } from "@/interfaces";

interface Props {
  educations: Education[];
}

const EducationList = ({ educations }: Props) => {
  return (
    <>
      <p className="md:text-xl font-bold mb-2 mt-4 text-zinc-600 dark:text-slate-300">
        Education
      </p>
      {educations.map((education) => (
        <EducationCard key={education.id} {...education} />
      ))}
    </>
  );
};

export { EducationList };
