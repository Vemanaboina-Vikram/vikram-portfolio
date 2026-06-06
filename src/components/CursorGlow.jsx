import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 200,
        y: position.y - 200,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 120,
      }}
      className="
      fixed
      top-0
      left-0
      w-[500px]
      h-[500px]
      rounded-full
      pointer-events-none
      z-0
      "
      style={{
        background:
          "radial-gradient(circle, rgba(16,185,129,1.5) 0%, rgba(16,185,129,0.05) 35%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  );
}