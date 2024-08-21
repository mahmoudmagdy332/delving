import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-11/12 py-20 mx-auto flex flex-col  gap-6  items-center lg:w-10/12">
      <div className="lg:w-1/3 flex justify-center">
        <img src="/images/PHOTOS/error404.svg" alt="404 Error" />
      </div>
      <div className="lg:w-1/2 flex flex-col items-center   gap-6 sm:px-20">
        <div className="text-primary font-semibold text-2xl text-center lg:text-left">
          Something went wrong.
        </div>
        <div className="text-primary text-md text-center">
          Sorry, We can’t find the page you’re looking for.
        </div>
        <Link
          to="/"
          className="flex justify-center items-center w-1/2 mx-auto h-12 bg-[#007DFE] text-white rounded"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
