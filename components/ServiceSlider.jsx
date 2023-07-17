//swiper components
import { Swiper, SwiperSlide } from "swiper/react";
//swiper css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import required modules
import { FreeMode, Pagination } from "swiper";

//icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Let's create that stunning look and feel for your website.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Let's code that design into an interactive and responsive web app.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Need for Search Engine Optimization? Let's make it happen.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[360px] xl:mt-[80px] mt-0"
    >
      {serviceData.map((item, itemIndex) => (
        <SwiperSlide key={itemIndex} className="">
          <div className="bg-primary/60 rounded-lg h-max px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 cursor-pointer group hover:bg-primary transition-all duration-300">
            <p className="text-3xl text-accent mb-4">{item.icon}</p>
            <div className="mb-8">
              <p className="mb-2 text-lg text-white font-semibold">
                {item.title}
              </p>
              <span className="text-gray-400">{item.description}</span>
            </div>
            <div className="text-2xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
