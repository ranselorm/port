import { useState } from "react";
import Image from "next/image";
import Circles from "../../components/Circles";
import Link from "next/link";

import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//  data
const aboutData = [
  {
    title: "Tech Stack",
    info: [
      {
        title: "HTML5",
        img: "/html.png",
      },
      {
        title: "CSS3",
        img: "/css.png",
      },
      {
        title: "Js",
        img: "/js.png",
      },
      {
        title: "Python",
        img: "/python.png",
      },
      {
        title: "React",
        img: "/react1.png",
      },
      {
        title: "Native",
        img: "/native.png",
      },
      {
        title: "Next",
        img: "/next1.png",
      },
      {
        title: "Tailwind",
        img: "/tailwind.png",
      },
      {
        title: "Nodejs",
        img: "/node.png",
      },
      {
        title: "Mongo",
        img: "/m.png",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  // bg - primary / 30;
  return (
    <div className="py-32 text-center h-screen">
      <Circles />
      <div className="flex flex-col xl:flex-row container mx-auto h-full items-center gap-x-6 mt-[20px] xl:mt-0 ">
        {/* text */}
        <div className="flex-1 flex flex-col items-center xl:items-start mx-auto ml-0 md:ml-0 md:w-full xl:ml-[100px] w-full">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            About Me<span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[700px] mx-auto xl:mx-0 mb-2 xl:mb-0 px-2 xl:px-0 text-justify xl:text-left text-white text-[14px] flex flex-col "
          >
            <span>
              Hello there! I&apos;m Selorm, also known as [ranselorm]. My
              passion revolves around crafting applications for both the web and
              mobile platforms.
            </span>
            <span className="my-3 lg:my-5">
              I wield a diverse set of languages including HTML, CSS,
              JavaScript, and Python. When it comes to frameworks, I'm
              well-versed in the likes of ReactJS, Node.js, Django, and React
              Native.
            </span>
            <span className="">
              Beyond the realm of development, you'll likely find me immersing
              myself in a captivating book, engaging in thrilling Call of Duty
              matches, tending to my vegetable garden or taking leisurely
              strolls with my dogs,
            </span>
            <br /> <br />
          </motion.p>
          <Link href={"/portfolio"} className="hidden md:flex">
            <motion.button
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="border-white/50 border px-4 py-2 rounded-full max-w-[150px] overflow-hidden group hover:border-accent hover:transition-all hover:duration-300 flex items-center gap-x-4 -mt-[50px] xl:-mt-4 mb-2"
            >
              Portfolio
              <BsArrowRight className="transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
            </motion.button>
          </Link>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col items-center justify-center flex-1 w-full xl:max-w-[48%] mt-[20px] xl:mt-0"
        >
          <div className="xl:mx-0 -mt-[70px]">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  className={`
                  capitalize text-xl xl:text-2xl`}
                  key={itemIndex}
                >
                  {item.title}
                  <span className="text-accent">.</span>
                </div>
              );
            })}
          </div>
          {/* -------------------------------------------------------------------------------- */}
          <div className="grid grid-cols-5 xl:grid-cols-5 gap-x-4 xl:gap-y-4 gap-y-4 max-w-[70%] text-white/60 xl:mt-10 mt-4">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex}>
                  <div className="flex flex-col items-center gap-y-3">
                    <div className="w-[300px] h-[30px] relative">
                      <Image
                        src={item.img}
                        alt="skills"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-white text-[14px]">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
