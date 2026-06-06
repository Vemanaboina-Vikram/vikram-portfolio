import { motion } from "framer-motion";

const experiences = [

  {
    role: "Treasurer",
    organization: "IEEE SB NBKRIST",
    period: "Mar 2023 – Feb 2024",
    points: [
      "Managed budgeting and financial activities for IEEE events.",
      "Maintained financial records and event expenditure tracking.",
    ],
  },

  {
    role: "Student Intern",
    organization: "Supraja Technologies, Vijayawada",
    period: "Oct 2023 – Mar 2024",
    points: [
      "Worked on Web Application Vulnerability Assessment and Penetration Testing.",
      "Improved web camera security and spyware protection concepts.",
    ],
  },
    {
    role: "Finance Team Lead",
    organization: "IEEE SB NBKRIST",
    period: "Feb 2024 – Jan 2025",
    points: [
      "Handled financial operations for major IEEE events.",
      "Coordinated budgeting, expense tracking, and team management.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-emerald-400 mb-4">
          Professional Journey
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-20">
          Experience &
          <span className="text-emerald-400">
            {" "}Leadership
          </span>
        </h2>

        <div className="relative">

  {/* Timeline Line */}

  <div
    className="
    absolute
    left-5
    md:left-1/2
    top-0
    bottom-0
    w-[2px]
    bg-emerald-500/30
    md:-translate-x-1/2
    "
  />

  {experiences.map((exp, index) => (
    <motion.div
      key={exp.role}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: index * 0.15 }}
      className={`
        relative
        mb-12
        flex
        pl-14
        md:pl-0
        ${
          index % 2 === 0
            ? "md:justify-start"
            : "md:justify-end"
        }
      `}
    >

      {/* Timeline Dot */}

      <div
        className="
        absolute
        left-5
        md:left-1/2
        top-8
        w-5
        h-5
        rounded-full
        bg-emerald-400
        -translate-x-1/2
        shadow-[0_0_20px_rgba(16,185,129,0.8)]
        "
      />

      {/* Card */}

      <div
        className="
        w-full
        md:w-[45%]
        p-6
        rounded-3xl
        bg-slate-900/60
        backdrop-blur-lg
        border
        border-slate-800
        hover:border-emerald-400
        transition-all
        duration-300
        "
      >

        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {exp.role}
            </h3>

            <p className="text-slate-400 mt-1">
              {exp.organization}
            </p>
          </div>

          <span className="text-emerald-400 text-sm">
            {exp.period}
          </span>

        </div>

        <ul className="mt-5 space-y-2 text-slate-300">

          {exp.points.map((point) => (
            <li key={point}>
              • {point}
            </li>
          ))}

        </ul>

      </div>

    </motion.div>
  ))}

</div>
        

      </div>
    </section>
  );
}