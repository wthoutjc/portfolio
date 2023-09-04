// Interfaces
import { Education } from "@/interfaces";

const Education = (education: Education) => {
  const {
    degree,
    description,
    endYear,
    fieldOfStudy,
    id,
    images,
    schoolName,
    startYear,
  } = education;

  return (
    <>
      <p
        className="text-[20px] md:text-4xl text-[#4e91a5] font-bold group-hover:text-[#2f7d95] select-none"
        style={{
          viewTransitionName: `title-project-${id}`,
        }}
        id="title-project"
      >
        {schoolName}
      </p>
      <div
        className="flex mt-2 mb-1 text-slate-400"
        style={{
          viewTransitionName: `span-project-${id}`,
        }}
      >
        {startYear} - {endYear} | {degree} | {fieldOfStudy}
      </div>
      <hr className="w-full h-0.5 mx-auto dark:bg-gray-100 border-0 rounded md:my-3 bg-[#2f7d95] mb-2" />
      <p className="text-xs md:text-base mb-3">{description}</p>
    </>
  );
};

export { Education };
