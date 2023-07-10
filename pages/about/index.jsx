import { useState } from "react";
import Circles from "../../components/Circles";

import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
// import {tailwi} from "react-icons/ai";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//  data
const aboutData = [
  {
    title: "skills",
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
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Bsc. Computer Science - Dominion University College",
        stage: "2016 - 2020",
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
          <button>Let's Connect</button>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col items-center xl:items-start flex-1 w-full xl:max-w-[48%]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 xl:mx-0">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:transition after:bg-accent duration-300"
                  } capitalize cursor-pointer relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="flex gap-x-5 gap-y-3 flex-wrap justify-center text-sm max-w-[70%] py-10 xl:justify-start text-white/60">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex}>
                  <div className="flex items-center gap-x-1">
                    <span>{item.icon && item.icon}</span>
                    <span className="text-xs">{item.title}</span>
                    <br />
                    <span>{item.stage && item.stage}</span>
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
