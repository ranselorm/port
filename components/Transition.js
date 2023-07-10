import { easeInOut, motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.4, ease: easeInOut }}
        className="bg-gradient-to-r from-primary/10 via-black/30 to-black/10 fixed top-0 right-full bottom-0 w-screen h-screen z-30"
      ></motion.div>
    </>
  );
};

export default Transition;
