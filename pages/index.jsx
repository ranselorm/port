import Link from "next/link";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { VscTerminalBash } from "react-icons/vsc";

const Home = () => {
  return (
    <section className="bg-primary/60 h-screen md:w-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center items-center lg:items-start pt-40 xl:pt-28 xl:pl-[180px] xl:text-left container mx-auto">
          <div className="mt-16 xl:mt-10">
            <motion.h1
              className="h1"
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <span className="font-black">
                Hey, I&apos;m Selorm<span className="text-accent">.</span>
              </span>

              <br />
              <div className="text-xl lg:text-2xl mt-2 xl:mx-0 w-full flex items-center justify-center lg:justify-start ">
                I&apos;m a Software
                <span className=" text-accent mx-2 flex items-center gap-x-2">
                  Engineer
                  <VscTerminalBash className="text-3xl animate-spin-slow " />
                </span>
              </div>
            </motion.h1>
            <motion.p
              className="max-w-sm xl:max-w-[38vw] mx-auto xl:mx-0 mb-10 xl:mb-6 text-center xl:text-justify text-white xl:leading-6 xl:text-[16px] -mt-0 xl:-mt-[10px] break-words"
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              As an engineer, I love coding, and developing web applications. I
              specialized in Frontend development by builing interactive and
              responsive user interfaces for applications. Do you have a project
              you want us to work on? Let&apos;s Connect!
            </motion.p>
          </div>
          <Link href={"/contact"} className="z-10">
            <motion.button
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="border-white/50 border px-4 py-2 rounded-full max-w-[150px] overflow-hidden group hover:border-accent flex items-center gap-x-4 hover:transition-all hover:duration-300"
            >
              Contact <BsArrowRight className="text-xl" />
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="absolute h-full w-[1200px] right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right w-full h-full bg-no-repeat mix-blend-color-dodge absolute translate-z-0 opacity-25"></div>
      </div>
    </section>
  );
};

export default Home;
