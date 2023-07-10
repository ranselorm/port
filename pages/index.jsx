import Image from "next/image";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

const Home = () => {
  return (
    <section className="bg-primary/60 h-screen">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center pt-40 xl:pt-28 xl:pl-[150px] xl:text-left container mx-auto">
          <motion.h1
            className="h1"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Transforming Ideas <br />
            Into
            <span className="text-accent"> Digital Reality</span>
          </motion.h1>
          <motion.p
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            est id dolorem doloribus dolores eum libero ducimus? Modi maxime, ad
            voluptas repellat unde id? Veritatis, atque eius! Cupiditate, iste
            quo?
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="absolute h-full w-[1200px] right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right w-full h-full bg-no-repeat mix-blend-color-dodge absolute translate-z-0 opacity-25"></div>
        {/* <ParticlesContainer /> */}
        {/* <div className="max-w-[237px] max-h-[178px] absolute w-full h-full bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar />
        </div> */}
      </div>
    </section>
  );
};

export default Home;
