import { motion } from "framer-motion";
import {
  Trophy,
  GraduationCap,
  ShieldCheck,
  Award,
} from "lucide-react";

const achievements = [
  {
    title: "GATE DA 2026",
    subtitle: "All India Rank 2708",
    icon: Trophy,
  },
  {
    title: "NPTEL Certification",
    subtitle: "Privacy and Security in Online Social Media",
    icon: GraduationCap,
  },
  {
    title: "Google Coursera",
    subtitle: "Crash Course on Python",
    icon: Award,
  },
  {
    title: "IEEE Leadership",
    subtitle: "Treasurer & Finance Team Lead",
    icon: ShieldCheck,
  },

];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-emerald-400 mb-4">
          Achievements & Certifications
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
          Milestones &
          <span className="text-emerald-400">
            {" "}Recognition
          </span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">

          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{once: false,amount:  0.2 }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="
              p-4
              rounded-2xl
              bg-slate-900/60
              backdrop-blur-lg
              border
              border-slate-800
              hover:border-emerald-400
              transition-all
              duration-300
              min-h-[180px]
              "
            >
              <div className="mb-4">
                <item.icon size={42}  className="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] "/>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm">
                {item.subtitle}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}