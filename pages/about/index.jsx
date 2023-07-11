import { useState } from "react";
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
        icon: <FaHtml5 />,
      },
      {
        title: "CSS3",
        icon: <FaCss3 />,
      },
      {
        title: "Javascript",
        icon: <FaJs />,
      },
      {
        title: "React",
        icon: <FaReact />,
      },
      {
        title: "Next",
        icon: <SiNextdotjs />,
      },
      {
        title: "Tailwind",
        icon: <SiNextdotjs />,
      },
      {
        title: "Native",
        icon: <SiNextdotjs />,
      },
      {
        title: "Firebase",
        icon: <SiNextdotjs />,
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="py-32 text-center h-screen bg-primary/30">
      <Circles />
      <div className="flex flex-col xl:flex-row container mx-auto h-full items-center gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col items-center justify-center xl:items-start">
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
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-0 px-2 xl:px-0 text-justify"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
            sed! A sit doloribus aspernatur libero voluptatibus! Molestias
            fugiat eveniet itaque dolorum nobis, beatae quod perspiciatis
            dolores veritatis magni laboriosam pariatur. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Praesentium consectetur
            perspiciatis tempore sapiente autem eius quidem provident atque vero
            dicta debitis culpa impedit unde, quae hic asperiores ad aperiam
            illo?
          </motion.p>
          <Link href={"/contact"}>
            <motion.button
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-accent/70 px-4 py-2 mx-auto xl:mx-0 rounded-sm flex items-center gap-x-4 mt-3 xl:mt-6"
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
          className="flex flex-col items-center justify-center flex-1 w-full xl:max-w-[48%] mt-[40px] xl:mt-0"
        >
          <div className="flex gap-x-4 xl:gap-x-8 xl:mx-0">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  className={`
                  capitalize cursor-pointer text-2xl`}
                  key={itemIndex}
                >
                  {item.title}
                  <span className="text-accent">.</span>
                </div>
              );
            })}
          </div>
          {/* -------------------------------------------------------------------------------- */}
          <div className="grid grid-cols-4 gap-x-4 xl:gap-y-2 gap-y-1 max-w-[70%] text-white/60 xl:mt-10 mt-4">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex}>
                  <div className="flex items-center gap-x-1 gap-y-2 flex-col">
                    <span className="text-xl">{item.icon && item.icon}</span>
                    <span className="text-xs text-white">{item.title}</span>
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
