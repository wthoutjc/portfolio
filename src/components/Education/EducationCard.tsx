import Image from "next/image";
import Link from "next/link";

// Interface
import { Education } from "@/interfaces";

const EducationCard = (education: Education) => {
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
    <div className="flex max-w-1xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-6">
      <div className="w-5/6">
        <Link
          href={`/education/${id}`}
          className="group flex flex-col p-3 pb-0 md:p-5 w-full"
        >
          <h5
            className="text-base md:mb-1 md:text-2xl font-bold tracking-tight text-[#4e91a5] dark:text-white group-hover:text-[#397283] duration-200 dark:group-hover:text-slate-400"
            style={{
              viewTransitionName: `title-project-${id}`,
            }}
          >
            {schoolName} | {degree}
          </h5>
          <p className="mb-3 text-xs md:text-base text-gray-700 dark:text-gray-400">
            {startYear} - {endYear} | {fieldOfStudy}
          </p>
          <div
            className="mb-1"
            style={{
              viewTransitionName: `span-project-${id}`,
            }}
          >
            {description}
          </div>
        </Link>
      </div>
      <div className="flex w-1/6">
        <Image
          className="object-contain"
          src={images[0]}
          style={{
            viewTransitionName: `image-project-${id}`,
          }}
          alt="ionjc dev"
          width={1600}
          height={1000}
        />
      </div>
    </div>
  );
};

export { EducationCard };
