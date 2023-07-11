import Image from "next/image";
import Link from "next/link";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <section className="bg-primary/60 h-screen">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center items-start pt-40 xl:pt-28 xl:pl-[180px] xl:text-left container mx-auto ">
          <div className="mt-16 xl:mt-10">
            <motion.div
              className="h1"
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Hey there
              <span role="img" aria-label="wave" className="animate-pulse">
                👋
              </span>
              <br />
              <div className="text-2xl xl:text-4xl flex items-center gap-x-3 mt-2 mx-5 xl:mx-0">
                <span> I'm Selorm </span>
                <BsArrowRight className="text-accent font-bold" />
                <span className="text-sm">Software Engineer</span>
              </div>
            </motion.div>
            <motion.p
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-6"
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              est id dolorem doloribus dolores eum libero ducimus? Modi maxime,
              ad voluptas repellat unde id? Veritatis, atque eius! Cupiditate,
              iste quo?
            </motion.p>
            <Link href={"/work"}>
              <motion.button
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="bg-accent/70 px-4 py-2 mx-auto xl:mx-0 rounded-sm flex items-center gap-x-4"
              >
                Projects <BsArrowRight className="text-xl" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute h-full w-[1200px] right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right w-full h-full bg-no-repeat mix-blend-color-dodge absolute translate-z-0 opacity-25"></div>
      </div>
    </section>
  );
};

export default Home;
