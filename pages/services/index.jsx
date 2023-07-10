import ServiceSlider from "../../components/ServiceSlider";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
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
            My Services<span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[400px] mx-auto lg:mx-0 text-[14px]"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, placeat distinctio. Laudantium officiis tempore quaerat
            voluptatem tempora voluptatibus nulla! Dolore?
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:max-w-[65%] xl:mr-[30px] mt-0"
        >
          <ServiceSlider />
        </motion.div>
      </div>
      {/* <Bulb /> */}
    </div>
  );
};

export default Services;
