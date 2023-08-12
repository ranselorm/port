import Link from "next/link";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Netflix UI Clone",
          path: "/th1.png",
          link: "",
          github: "",
        },
        {
          title: "E-Commerce",
          path: "/th3.png",
          link: "",
          github: "",
        },
        {
          title: "Project MGMT",
          path: "/thumb3.jpg",
          link: "",
          github: "",
        },
        {
          title: "Real Estate",
          path: "/thumb4.jpg",
          link: "",
          github: "",
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: "title",
    //       path: "/thumb4.jpg",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb1.jpg",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb2.jpg",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb3.jpg",
    //     },
    //   ],
    // },
  ],
};

import { BsArrowRight } from "react-icons/bs";
//swiper components
import { Swiper, SwiperSlide } from "swiper/react";
//swiper css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] xl:mt-[80px] mt-0"
    >
      {workSlides.slides.map((slide, itemIndex) => {
        return (
          <SwiperSlide key={itemIndex}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="relative flex items-center justify-center overflow-hidden group">
                      <Image
                        src={image.path}
                        alt="project"
                        width={500}
                        height={300}
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-2 xl:group-hover:-translate-y-10 transition-all duration-300">
                        <div className="flex items-center flex-col xl:gap-y-4 gap-y-1 justify-center text-[13px] tracking-[0.2em]">
                          {/* title */}
                          <div className="xl:text-2xl text-[14px]">
                            {image.title}
                          </div>
                          <Link
                            href={""}
                            className="delay-100 flex items-center gap-x-2 xl:text-[20px] text-sm xl:gap-y-4 gap-y-2 "
                          >
                            Preview <BsArrowRight />
                          </Link>
                          {/* icon */}
                          <Link href={""}>
                            <AiOutlineGithub className="xl:text-2xl text-xl" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

//

export default WorkSlider;
