import Image from "next/image";
import Link from "next/link";

// Interface
import { Project } from "@/interfaces";

const ProjectCard = (project: Project) => {
  const { description, id, technologies, title, images } = project;

  return (
    <div className="flex flex-col max-w-1xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-6">
      <div className="flex">
        <div className="w-5/6">
          <Link
            href={`/projects/${id}`}
            className="group flex flex-col p-3 pb-0 md:pb-0 md:p-5 w-full"
          >
            <h5
              className="text-base md:mb-1 md:text-2xl font-bold tracking-tight text-[#4e91a5] dark:text-white group-hover:text-[#397283] duration-200 dark:group-hover:text-slate-400"
              style={{
                viewTransitionName: `title-project-${id}`,
              }}
            >
              {title}
            </h5>
            <div
              className="mb-1"
              style={{
                viewTransitionName: `span-project-${id}`,
              }}
            >
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-[10px] md:text-xs text-slate-500 mr-2"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mb-3 text-xs md:text-base text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </Link>
          <div className="p-3 md:p-3 md:pl-5 pt-3 bg-[#4e91a5] rounded-lg rounded-e-none rounded-ss-none rounded-se-none">
            <Link
              href={`/projects/${id}`}
              className="inline-flex items-center px-2 py-1.5 text-xs md:text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View project
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="w-1/6 relative">
          {images.map((image, i) => (
            <Image
              key={i}
              className={`absolute top-${
                i * 10 + (i % 96)
              } left-0 rounded-lg rounded-ss-none rounded-se-none rounded-es-none z-${
                i + 1
              }`}
              src={image}
              style={{
                viewTransitionName: `image-project-${id}`,
              }}
              alt="ionjc dev"
              width={1600}
              height={1000}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
