import { Link } from "react-router-dom";
import { useHomeSliceSelector } from "../../app/slices/homeSlice";
import Recomended from "./Recomended";

function Learning() {
  const { newCourses } = useHomeSliceSelector((state) => state.homeReducer);

  return (
    <div className="p-4 flex flex-col  gap-4">
      <h1 className="text-2xl font-bold my-8">Start Learning</h1>
      <div
        className="flex flex-col border-2 border-gray-200 gap-4 rounded-xl  "
        style={{
          boxShadow: "5px 10px 5px #E5E5E5",
        }}
      >
        <div className="bg-[#ECF0FF]  p-8 rounded-t-xl ">
          <div className="flex items-center justify-center">
            <img
              width={96}
              height={96}
              src={
                newCourses && newCourses[0]?.image
                  ? newCourses[0]?.image
                  : "/images/PHOTOS/logic-deduction-M7p41u.png"
              }
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h3 className="text-2xl font-bold">
            {" "}
            {newCourses && newCourses[0]?.name}
          </h3>

          <div className="w-full p-8 text-center">
            <Link
              to={"/pricing"}
              className=" py-4 w-full flex items-center justify-center  border-black bg-black border-2  rounded-full text-lg text-white"
            >
              <p> subscribe now</p>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="bg-[radial-gradient(168.03%_121.12%_at_11.01%_14.84%,_rgba(255,255,255,0)_0%,_rgba(238,167,31,0.2)_72.19%)] border-2 border-gray-200 lg:p-[24px] md:p-[20px] p-[10px]  flex items-center gap-4 rounded-xl">
        <div>
          <p className="lg:text-xl font-bold md:text-lg text-md mb-4">
            Premium users are 6x more likely to reach their learning goals
          </p>
          <button className=" md:py-4  md:px-6 sm:py-3  py-2 px-4 border-black bg-[#29cc57] border-2  rounded-full text-sm md:text-lg  text-white">
            Learn More
          </button>
        </div>
        <img src="../../../public/images/PHOTOS/Award.svg" alt="" />
      </div> */}
      <div>
        <Recomended />
      </div>
    </div>
  );
}

export default Learning;
