// Components
import { ProjectSkeleton } from "@/components";

const LoadingRootPage = () => {
  return (
    <>
      <p className="md:text-xl font-bold mb-2 mt-4">Experience</p>
      <ProjectSkeleton />
      <ProjectSkeleton />
      <ProjectSkeleton />
    </>
  );
};

export default LoadingRootPage;
