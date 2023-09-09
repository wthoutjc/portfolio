import Image from "next/image";
import Link from "next/link";

// Interfaces
import { Skill } from "@/interfaces";

const SkillCard = (skill: Skill) => {
  const { description, frameworks, id, image, name } = skill;

  return (
    <div className="flex max-w-1xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-6">
      <div className="w-5/6">
        <Link
          href={`/skills/${id}`}
          className="group flex flex-col p-3 pb-0 md:pb-0 md:p-5 w-full"
        >
          <h5
            className="text-base md:mb-1 md:text-2xl font-bold tracking-tight text-[#4e91a5] dark:text-white group-hover:text-[#397283] duration-200 dark:group-hover:text-slate-400"
            style={{
              viewTransitionName: `title-project-${id}`,
            }}
          >
            {name}
          </h5>
          <div
            className="mb-1"
            style={{
              viewTransitionName: `span-project-${id}`,
            }}
          >
            {frameworks?.map((framework, i) => (
              <span
                key={i}
                className="text-[10px] md:text-xs text-slate-500 mr-2"
              >
                {framework}
              </span>
            ))}
          </div>
        </Link>
      </div>
      <div className="w-2/6 p-2">
        <Image
          className="object-contain w-full h-full z-1"
          src={image}
          style={{
            viewTransitionName: `image-project-${id}`,
          }}
          alt="ionjc dev"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export { SkillCard };
