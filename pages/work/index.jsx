import WorkSlider from "../../components/WorkSlider";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="bg-primary/30 h-screen py-36 flex items-center justify-center">
      <Circles />
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center">
        <div className="text-center flex flex-col xl:w-[30vw] mb-4 xl:mb-0 lg:text-left">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            My Work<span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[300px] mx-auto lg:mx-0 text-[14px]"
          ></motion.p>
        </div>
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:max-w-[65%] xl:mr-[50px] mt-0"
        >
          <WorkSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
