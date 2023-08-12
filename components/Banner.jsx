import Link from "next/link";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { VscTerminalBash } from "react-icons/vsc";
import About from "./About";

const Banner = () => {
  return (
    <section className="bg-primary/60 h-screen md:w-full -mt-[50px] md:-mt-0">
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
              <div className="text-xl lg:text-xl mt-2 xl:mx-0 w-full flex items-center justify-center lg:justify-start ">
                &lt;Frontend
                <span className=" text-accent mx-2 flex items-center gap-x-2">
                  Engineer
                  <VscTerminalBash className="text-3xl animate-spin-slow " />
                  /&gt;
                </span>
              </div>
            </motion.h1>
            <motion.p
              className="max-w-sm xl:max-w-[38vw] mx-auto xl:mx-0 mb-10 xl:mb-6 text-center xl:text-left text-white xl:leading-6 xl:text-[16px] -mt-0 xl:-mt-[10px] break-words"
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              I&apos;m a Javascript developer who focuses on Frontend
              development using HTML5, CSS3, Javascript & React.js by build
              interactive and responsive user interfaces. <br />
              <br />I do occasionally work on backend with Node, Express and
              MongoDB. Do you have a project you want us to work on? Let&apos;s
              Connect!
            </motion.p>
            {/* <article className="text-2xl mb-[30px]">
              <motion.div
                className="flex items-center justify-center md:justify-start gap-x-3"
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <div className="w-[30px] h-[30px] ">
                  <img
                    src="./html.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[30px] h-[30px]">
                  <img
                    src="./css.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[30px] h-[30px]">
                  <img
                    src="./js.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[30px] h-[30px]">
                  <img
                    src="./react1.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[30px] h-[30px]">
                  <img
                    src="./next1.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[30px] h-[30px]">
                  <img
                    src="./tail.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[30px] h-[30px]">
                  <img
                    src="./node.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[30px] h-[30px]">
                  <img
                    src="./m.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </article> */}
          </div>
          <div className="flex gap-x-6">
            <Link href={"/contact"} className="z-10">
              <motion.button
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="border-white/50 border px-4 py-2 rounded-full max-w-[150px] overflow-hidden group hover:border-accent flex items-center gap-x-4 hover:transition-all hover:duration-300"
              >
                Contact
              </motion.button>
            </Link>
          </div>
          <About />
        </div>
      </div>

      <div className="absolute h-full w-[1200px] right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right w-full h-full bg-no-repeat mix-blend-color-dodge absolute translate-z-0 opacity-25"></div>
      </div>
    </section>
  );
};

export default Banner;
