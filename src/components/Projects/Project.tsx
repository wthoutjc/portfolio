import Image from "next/image";
import Link from "next/link";

// Interfaces
import { Project } from "@/interfaces";

const Project = (project: Project) => {
  const {
    description,
    id,
    technologies,
    title,
    extendedDescription,
    companyName,
    country,
    startDate,
    endDate,
    githubLink,
  } = project;

  return (
    <>
      <p
        className="text-[20px] md:text-4xl text-[#4e91a5] font-bold group-hover:text-[#2f7d95] select-none"
        style={{
          viewTransitionName: `title-project-${id}`,
        }}
        id="title-project"
      >
        {title}
      </p>
      <div
        className="mb-1"
        style={{
          viewTransitionName: `span-project-${id}`,
        }}
      >
        {technologies.map((tech, i) => (
          <span key={i} className="text-[10px] md:text-xs text-slate-600 mr-2">
            {tech}
          </span>
        ))}
      </div>
      <hr className="w-full h-0.5 mx-auto dark:bg-gray-100 border-0 rounded md:my-3 bg-[#2f7d95] mb-2" />
      <p className="text-xs md:text-base mb-3">{description}</p>
      <div className="flex w-full mb-6">
        <Image
          className="object-cover h-96 w-full"
          src="https://res.cloudinary.com/ddmeptk5c/image/upload/f_auto,q_auto/v1/portfolio/mbxscisbe6yacaa7lkky"
          style={{
            viewTransitionName: `image-project-${id}`,
          }}
          alt="ionjc dev"
          width={500}
          height={500}
        />
      </div>
      <p className="text-xs md:text-base">{extendedDescription}</p>
      <p className="text-xs md:text-base mt-3 mb-3">
        <span>Company: </span>
        <Link className="hover:underline" href="http://produgan.com/">
          <strong>{companyName}</strong>
        </Link>
        <strong>, {country}.</strong>{" "}
        <i>
          {startDate} - {endDate}.
        </i>
      </p>
      <div>
        <p>Source:</p>
        {githubLink.length > 0 ? (
          githubLink.map((item, i) => <Link key={i} href={item} />)
        ) : (
          <p>Private</p>
        )}
      </div>
    </>
  );
};

export { Project };
