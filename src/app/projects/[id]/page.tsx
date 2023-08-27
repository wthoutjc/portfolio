// Services
import { getProject } from "@/services";
import Image from "next/image";

interface Props {
  params: { id: string };
}

export default async function ProjectPage({ params }: Props) {
  const { project } = await getProject(params.id);
  if (!project) return <div className="p-3">Project not found</div>;

  const {
    id,
    title,
    companyName,
    country,
    description,
    endDate,
    extendedDescription,
    githubLink,
    startDate,
    technologies,
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
          <span
            key={i}
            className="text-[10px] md:text-xs text-slate-600 mr-2 dark:text-slate-300"
          >
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
          width={1920}
          height={1080}
        />
      </div>
      <p className="text-xs md:text-base">{extendedDescription}</p>
      <p className="text-xs md:text-base mt-3 mb-3">
        <span>Company: </span>
        <a className="hover:underline" href="http://produgan.com/">
          <strong>{companyName}</strong>
        </a>
        <strong>, {country}.</strong>{" "}
        <i>
          {startDate} - {endDate}.
        </i>
      </p>
      <div>
        <p>Source:</p>
        {githubLink.length > 0 ? (
          githubLink.map((item, i) => <a key={i} href={item}></a>)
        ) : (
          <p>Private</p>
        )}
      </div>
    </>
  );
}
