const LoadingProjectPage = () => {
  return (
    <>
      <div className="w-full h-6 bg-gray-300 rounded-lg dark:bg-gray-700 mb-3 mx-auto shadow animate-pulse"></div>
      <div className="mb-1">
        <div className="h-2.5 bg-gray-200 rounded-lg dark:bg-gray-700 mb-2 mx-auto shadow animate-pulse"></div>
      </div>
      <hr className="w-full h-0.5 mx-auto dark:bg-gray-100 border-0 rounded md:my-3 bg-[#2f7d95] mb-2" />
      <div className="flex flex-col w-full">
        <div className="w-full h-3.5 bg-gray-200 rounded-lg dark:bg-gray-700 mb-2 mx-auto shadow animate-pulse"></div>
      </div>
    </>
  );
};

export default LoadingProjectPage;
