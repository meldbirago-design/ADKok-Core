import { motion } from "framer-motion";

const MotionDiv = motion.div;

const transition = {
  duration: 0.75,
  ease: [0.16, 1, 0.30, 1],
};

export default function PageTransition({ children }) {
  return (
    <MotionDiv
      initial={{
        opacity: 0,
        y: 22,
        scale: 0.992,
        filter: "blur(12px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        y: -12,
        scale: 1.006,
        filter: "blur(8px)",
      }}
      transition={transition}
      style={{
        width: "100%",
        height: "100%",
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </MotionDiv>
  );
}
