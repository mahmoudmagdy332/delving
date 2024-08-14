import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";

type category = {
  name: string;
  video: string;
  course: {
    title: string;
    icon: string;
  }[];
};
function Engineering() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleSetActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  const Category: category[] = [
    {
      name: "Civil Engineering",
      video: "../../../public/images/Videos/electives.mp4",
      course: [
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
      ],
    },
    {
      name: "Civil Engineering",
      video: "../../../public/images/Videos/electives.mp4",
      course: [
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
      ],
    },
    {
      name: "Civil Engineering",
      video: "../../../public/images/Videos/electives.mp4",
      course: [
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
      ],
    },
    {
      name: "Civil Engineering",
      video: "../../../public/images/Videos/electives.mp4",
      course: [
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
      ],
    },
    {
      name: "Civil Engineering",
      video: "../../../public/images/Videos/electives.mp4",
      course: [
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
      ],
    },
    {
      name: "Civil Engineering",
      video: "../../../public/images/Videos/electives.mp4",
      course: [
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
        {
          title: "Calculus in a Nutshell",
          icon: "/images/ICONS/culcus.svg",
        },
      ],
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % Category.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [Category.length]);
  return (
    <div className="py-8 bg-[#f2f2f2]">
      <div className="lg:w-3/4 w-10/12 mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Build quantitative + technical problem-solving skills
        </h1>

        <div className="flex flex-col">
          <div className="border-y">
            <Swiper
              spaceBetween={5}
              slidesPerView={2}
              pagination={{ clickable: true }}
              freeMode={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
            >
              {Category.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`p-4 cursor-pointer ${
                      activeIndex == index && "bg-white"
                    } `}
                    onClick={() => handleSetActiveIndex(index)}
                  >
                    <p className="text-center text-lg font-bold text-gray-600 hover:text-black">
                      {item.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center gap-10 mt-4">
            <div className="w-1/3 md:w-2/5">
              <h1>
                course in
                <span className="font-bold">{Category[activeIndex].name}</span>
              </h1>

              <div className="flex flex-row flex-wrap gap-4 lg:flex-col">
                {Category[activeIndex].course.map((items, index) => (
                  <div className="flex items-center gap-2" key={index}>
                    <img src={items.icon} className="flex-shrink-0" alt="" />
                    <p>{items.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className=" relative p-10 border-2 rounded-md  border-black lg:w-2/3 h-[75vh] md:w-3/5"
              style={{ boxShadow: "10px 5px 5px black" }}
            >
              <video
                autoPlay={true}
                className="h-full w-full object-cover"
                src={Category[activeIndex].video}
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Engineering;
