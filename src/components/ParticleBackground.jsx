import { motion } from "framer-motion";

export default function ParticleBackground() {
  const particles = Array.from({ length: 40 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="
          absolute
          w-1
          h-1
          bg-emerald-400
          rounded-full
          opacity-40
          "
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

    </div>
  );
}