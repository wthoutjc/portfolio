import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-start items-center mt-14 w-full ">
      <div className="block dark:hidden w-20">
        <Image
          className="object-cover"
          src="https://res.cloudinary.com/ddmeptk5c/image/upload/f_auto,q_auto/v1/portfolio/zuvtlwc26x7pj15k8lzo"
          alt="ionjc"
          width={200}
          height={200}
        />
      </div>
      <div className="w-20">
        <Image
          className="dark:block hidden object-cover"
          src="https://res.cloudinary.com/ddmeptk5c/image/upload/f_auto,q_auto/v1/portfolio/j8xkkfi3ejsctsyhina5"
          alt="ionjc"
          width={200}
          height={200}
        />
      </div>
      <h1 className="text-[68px] font-bold">404</h1>
      <p className="mb-4">Esta página no está disponible</p>
      <Link
        href={process.env.NEXT_PUBLIC_BASE_PATH || "/"}
        className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="w-3 h-3 text-white mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
          />
        </svg>
        INICIO
      </Link>
    </div>
  );
};

export default NotFoundPage;
