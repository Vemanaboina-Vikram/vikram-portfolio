import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
      fixed
      top-0
      left-0
      right-0
      h-[4px]
      bg-emerald-400
      z-[99999]
      origin-left
      "
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}