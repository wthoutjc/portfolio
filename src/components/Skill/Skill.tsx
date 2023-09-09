// Interfaces
import { Skill } from "@/interfaces";

const Skill = (skill: Skill) => {
  const { description, frameworks, id, image, name } = skill;

  return (
    <>
      <p
        className="text-[20px] md:text-4xl text-[#4e91a5] font-bold group-hover:text-[#2f7d95] select-none"
        style={{
          viewTransitionName: `title-project-${id}`,
        }}
        id="title-project"
      >
        {name}
      </p>
      <div
        className="mb-1"
        style={{
          viewTransitionName: `span-project-${id}`,
        }}
      >
        {frameworks.map((framework, i) => (
          <span
            key={i}
            className="text-[10px] md:text-xs text-slate-600 dark:text-slate-300 mr-2"
          >
            {framework}
          </span>
        ))}
      </div>
      <hr className="w-full h-0.5 mx-auto dark:bg-gray-100 border-0 rounded md:my-3 bg-[#2f7d95] mb-2" />
      <p className="text-xs md:text-base mb-3">{description}</p>
    </>
  );
};

export { Skill };
