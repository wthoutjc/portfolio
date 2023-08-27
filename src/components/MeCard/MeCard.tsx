import Image from "next/image";
import Link from "next/link";

const MeCard = () => {
  return (
    <div className="flex flex-col p-2 opacity-60 hover:opacity-100 ease-in-out duration-300 lg:w-1/4 md:w-full">
      <div className="flex sticky top-10 md:mt-10 md:flex-col lg:flex-col">
        <div className="flex justify-start w-full mb-4 overflow-auto">
          <Image
            className="object-cover rounded-full w-36 h-36"
            src="https://res.cloudinary.com/ddmeptk5c/image/upload/f_auto,q_auto/v1/portfolio/mbxscisbe6yacaa7lkky"
            alt="ionjc"
            width={300}
            height={300}
          />
        </div>
        <div className="w-2/3">
          <p className="font-bold mb-2 text-xs md:text-lg">
            Juan Camilo Ramírez Rátiva
          </p>
          <p className="text-xs md:text-base md:mb-5">
            Systems Engineer / Data Engineer / Enterprise Automation Solutions
            Developer
          </p>
        </div>
        <div className="hidden md:block">
          <p className="md:text-xs lg:text-sm">Bogotá D.C., Colombia</p>
          <div className="flex flex-col">
            <Link
              href="mailto:"
              className="md:text-xs lg:text-sm hover:underline mt-2"
            >
              Email
            </Link>
            <Link
              href="*"
              className="md:text-xs lg:text-sm hover:underline mt-2"
            >
              LinkedIn
            </Link>
            <Link
              href="*"
              className="md:text-xs lg:text-sm hover:underline mt-2"
            >
              GitHub
            </Link>
            <Link
              href="*"
              className="md:text-xs lg:text-sm hover:underline mt-2"
            >
              CV
            </Link>
          </div>
        </div>
        <div className="block md:hidden">
          <button>
            <p className="text-xs">Socials</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export { MeCard };
