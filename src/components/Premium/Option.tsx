import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

function PricingTable() {
  return (
    <div className="relative flex flex-col my-4 w-11/12 sm:w-10/12 lg:w-3/4 mx-auto ">
      <h1 className="text-2xl text-center my-4 font-bold ">
        No commitment, cancel anytime
      </h1>
      <p className="text-xl text-center mb-4 font-medium ">
        Unlock it all with Premium
      </p>
      <table className="min-w-full shadow-md overflow-scroll sm:rounded-lg text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3">
              Free
            </th>
            <th scope="col" className="px-6 py-3 bg-[#EAFAEE]">
              Premium
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 bg-gray-50"
            >
              Guided courses
              <p className="text-sm font-normal text-gray-500">
                In math, science, programming, data analysis, and more
              </p>
            </th>
            <td className="px-6 py-4 text-center">Preview only</td>
            <td className="px-6 py-4 bg-[#EAFAEE]">
              <div className="flex justify-center items-center text-blue-600 h-full">
                <FaCheckCircle className="text-xl sm:text-2xl" />
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 bg-gray-50"
            >
              Bonus math, science, & CS puzzles
              <p className="text-sm font-normal text-gray-500">
                Hundreds of additional bite-sized challenges
              </p>
            </th>
            <td className="px-6 py-4 text-center">Preview only</td>
            <td className="px-6 py-4 bg-[#EAFAEE]">
              <div className="flex justify-center items-center text-blue-600 h-full">
                <FaCheckCircle className="text-xl sm:text-2xl" />
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 bg-gray-50"
            >
              No limits
              <p className="text-sm font-normal text-gray-500">
                Access our full library of content
              </p>
            </th>
            <td className="px-6 py-4 text-center text-gray-500">
              <div className="flex justify-center items-center h-full">
                <IoIosCloseCircle className="text-xl sm:text-2xl" />
              </div>
            </td>
            <td className="px-6 py-4 bg-[#EAFAEE]">
              <div className="flex justify-center items-center text-blue-600 h-full">
                <FaCheckCircle className="text-xl sm:text-2xl" />
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 bg-gray-50"
            >
              Fully unlocked learning paths
              <p className="text-sm font-normal text-gray-500">
                Step-by-step pathways to develop your problem-solving skills in
                math, science, data, and programming
              </p>
            </th>
            <td className="px-6 py-4 text-center text-gray-500">
              <div className="flex justify-center items-center h-full">
                <IoIosCloseCircle className="text-xl sm:text-2xl" />
              </div>
            </td>
            <td className="px-6 py-4 bg-[#EAFAEE]">
              <div className="flex justify-center items-center text-blue-600 h-full">
                <FaCheckCircle className="text-xl sm:text-2xl" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PricingTable;
