import { useState } from "react";
import Image from "next/image";


import { motion } from "framer-motion";

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

  return (
    <div className="py-32 text-center h-screen">
      <div className="flex flex-col xl:flex-row container mx-auto h-full items-center gap-x-6 mt-[20px] xl:mt-0">

        {/* info */}
        <motion.div className="flex flex-col items-center justify-center flex-1 w-full xl:max-w-[48%] mt-[20px] xl:mt-0">
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
          <div className="grid grid-cols-8 gap-x-4 xl:gap-y-4 gap-y-0 max-w-[70%] text-white/60 xl:mt-10 mt-4">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex}>
                  <div className="flex gap-x-4 flex-wrap">
                    <div className="w-[100px] h-[50px] relative flex items-center justify-center">
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
