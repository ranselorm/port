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
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-0 px-2 xl:px-0 text-justify text-white text-[16px] tracking-tight"
          >
            Hey Pal, I&apos;m Selorm. I'm a Javascript developer who focuses on
            Frontend development using HTML5, CSS3, Javascript, React.
            <br /> <br /> I don't work on backend that much but when I do, my
            preferred stack are Node, Express and MongoDB. <br /> <br />I am
            comfortable working REST and GraphQL APIs. If I'm not engineering,
            coding or developing, I'm probably in my vegetable garden, walking
            my dogs, rocking Call of Duty or reading.
            <br /> <br />
          </motion.p>
          <Link href={"/contact"}>
            <motion.button
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-accent/70 px-4 py-2 mx-auto xl:mx-0 rounded-sm flex items-center gap-x-4 -mt-4 xl:mt-6 mb-4"
            >
              Connect <BsArrowRight className="text-xl" />
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
          <div className="xl:mx-0">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  className={`
                  capitalize text-2xl`}
                  key={itemIndex}
                >
                  {item.title}
                  <span className="text-accent">.</span>
                </div>
              );
            })}
          </div>
          {/* -------------------------------------------------------------------------------- */}
          <div className="grid grid-cols-8 xl:grid-cols-4 gap-x-4 xl:gap-y-4 gap-y-0 max-w-[70%] text-white/60 xl:mt-10 mt-4">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex}>
                  <div className="flex gap-x-4 flex-wrap">
                    <div className="w-[50px] h-[50px] relative flex items-center justify-center">
                      <Image src={item.img} fill className="object-contain" />
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
