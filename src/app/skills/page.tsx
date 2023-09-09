import skills from "@/data/skills.json";

// Components
import { SkillCard } from "@/components";

const SkillsPage = () => {
  return (
    <div>
      <p className="md:text-xl font-bold mb-2 mt-4 text-zinc-600 dark:text-slate-300">
        Skills
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
