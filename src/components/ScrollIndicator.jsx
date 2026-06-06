import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

      <p className="text-slate-400 text-sm text-center">
        Scroll to Explore
      </p>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="
        mt-3
        text-emerald-400
        text-center
        text-2xl
        "
      >
        ↓
      </motion.div>

    </div>
  );
}