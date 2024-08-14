function Gift() {
  return (
    <div className="flex flex-col items-center lg-w-3/4 w-10/12 mx-auto  ">
      <h1 className="text-[18px] font-bold text-black">
        Share the gift of Premium
      </h1>

      <div className="flex flex-col md:flex-row items-center w-10/12   my-10  gap-4 justify-center">
        <div className="flex flex-col md:flex-row items-center p-6 rounded-2xl border-2">
          <img src="../../../public/images/PHOTOS/gift-plan.svg.svg" alt="" />
          <div className="flex flex-col gap-2 ">
            <h1 className="text-md font-bold">gift plan</h1>
            <p>
              Share your love of math and science — give a subscription to
              Brilliant Premium.
            </p>
            <button className=" py-2 border-black border-2  rounded-full text-lg text-black">
              subscribe now
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center p-6 rounded-2xl border-2">
          <img src="../../../public/images/PHOTOS/gift-plan.svg.svg" alt="" />
          <div className="flex flex-col gap-2 ">
            <h1 className="text-md font-bold">gift plan</h1>
            <p>
              Share your love of math and science — give a subscription to
              Brilliant Premium.
            </p>
            <button className=" py-2 border-black border-2  rounded-full text-lg text-black">
              subscribe now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gift;
