import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-slate-800
      mt-20
      "
    >
      <div className="max-w-7xl mx-auto px-8 py-12">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{once: false,amount:  0.2 }}
          className="text-center"
        >

          {/* Name */}

          <h3
            className="
            text-3xl
            font-bold
            bg-gradient-to-r
            from-emerald-400
            to-cyan-400
            bg-clip-text
            text-transparent
            "
          >
            VEMANABOINA VIKRAM
          </h3>

          {/* Subtitle */}

          <p className="text-slate-400 mt-4">
            AI & Data Science Graduate • IEEE Leader • GATE DA Rank 2708
          </p>

          {/* Social Section */}

          <div
            className="
            flex
            flex-wrap
            justify-center
            gap-4
            mt-8
            "
          >

            <span
              className="
              px-5
              py-2
              rounded-full
              bg-slate-900
              border
              border-slate-800
              text-slate-300
              "
            >
              GitHub (Coming Soon)
            </span>

            <span
              className="
              px-5
              py-2
              rounded-full
              bg-slate-900
              border
              border-slate-800
              text-slate-300
              "
            >
              LinkedIn (Coming Soon)
            </span>

            <span
              className="
              px-5
              py-2
              rounded-full
              bg-slate-900
              border
              border-slate-800
              text-slate-300
              "
            >
              Portfolio v1.0
            </span>

          </div>

          {/* Bottom Line */}

          <div
            className="
            mt-10
            pt-8
            border-t
            border-slate-800
            "
          >

            <p className="text-slate-500 text-sm">
              © 2026 Vemanaboina Vikram. All Rights Reserved.
            </p>

          </div>

        </motion.div>

      </div>
    </footer>
  );
}