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
        title: "Javascript",
        img: "/js.png",
      },
      {
        title: "React",
        img: "/react1.png",
      },
      {
        title: "Next",
        img: "/next1.png",
      },
      {
        title: "Tailwind CSS",
        img: "/tail.png",
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
            className="max-w-[500px] mx-auto xl:mx-0 mb-2 xl:mb-0 px-2 xl:px-0 text-left text-white text-[16px] flex flex-col "
          >
            <span>
              Hey Pal, I&apos;m a Javascript developer who focuses on Frontend
              development using HTML5, CSS3, Js & React.
            </span>
            <span className="my-3 lg:my-5">
              I don&apos;t regularly work on backend but when I do, my preferred
              stack are Node, Express and MongoDB.
            </span>
            <span className="">
              I am comfortable working with REST and GraphQL APIs. Not
              developing? I&apos;m prolly in my vegetable garden, walking my
              dogs, playing Call of Duty or Reading.
            </span>
            <br /> <br />
          </motion.p>
          <Link href={"/work"} className="hidden md:flex">
            <motion.button
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="border-white/50 border px-4 py-2 rounded-full max-w-[150px] overflow-hidden group hover:border-accent hover:transition-all hover:duration-300 flex items-center gap-x-4 -mt-[50px] xl:-mt-4 mb-2"
            >
              Portfolio <BsArrowRight className="text-xl" />
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
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-4 xl:gap-y-4 gap-y-0 max-w-[70%] text-white/60 xl:mt-10 mt-4">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex}>
                  <div className="flex gap-x-4 flex-wrap">
                    <div className="w-[200px] h-[50px] relative flex items-center justify-center">
                      <Image
                        src={item.img}
                        alt="skills"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <br />
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
