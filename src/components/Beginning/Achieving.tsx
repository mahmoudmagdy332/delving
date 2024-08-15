function Achieving() {
  const week: string[] = ["Su", "M", "T", "W", "Th"];
  return (
    <div className=" flex flex-col gap-4">
      <h1 className="text-2xl font-bold my-8">Welcome, sarah</h1>
      <div className="flex flex-col border-2 gap-4 rounded-xl">
        <div className="p-4">
          <div className="flex items-center ">
            <div className="flex items-center gap-4">
              <p className="text-4xl font-bold">0</p>
              <img
                className="flex-shrink-0"
                src="../../../public/images/ICONS/Elect1.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center  gap-4">
            {week.map((items, index) => (
              <div
                key={index}
                className="flex flex-col  justify-center items-center"
              >
                <div>
                  <img src="../../../public/images/ICONS/Electric.svg" alt="" />
                </div>
                <p>{items}</p>
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <img src="../../../public/images/ICONS/battary.svg" alt="" />
              <img src="../../../public/images/ICONS/battary.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#f2f2f2]">
          <p className="my-4 font-bold text-xl text-center ">
            START A LEARNING HABIT
          </p>
          <div className="flex items-center p-2">
            <img
              src="/images/ICONS/drowing.svg"
              width={64}
              height={64}
              alt=""
            />

            <div className="p-4 bg-gray-100 rounded-lg">
              <label className="flex items-center space-x-2 mb-2">
                <input
                  type="radio"
                  name="task"
                  className="form-radio text-blue-600"
                />
                <span className="text-black font-semibold">
                  Start your first course
                </span>
              </label>
              <label className="flex items-center space-x-4 mb-2">
                <input
                  type="radio"
                  name="task"
                  className="form-radio text-blue-600"
                />
                <span className="text-black font-semibold">
                  Finish your first lesson
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="task"
                  className="form-radio text-blue-600"
                />
                <span className="text-black font-semibold">
                  Continue your streak tomorrow
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center  border-2 p-4 gap-4 rounded-xl">
        <img src="../../../public/images/PHOTOS/GoldenLock.svg" alt="" />
        <div className="flex flex-col gap-4">
          <h3 className="text-black text-[16px] font-semibold">
            unlock Leagues
          </h3>
          <p className="text-gray-400">0 of 176 XP</p>
        </div>
      </div>
    </div>
  );
}

export default Achieving;