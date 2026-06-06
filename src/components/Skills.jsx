import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "Java", "SQL"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "Flask"],
  },
  {
    title: "AI & Data Science",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "LSTM",
      "XGBoost",
      "Data Analytics",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "MySQL",
      "VS Code",
    ],
  },
  {
    title: "Cybersecurity",
    skills: [
      "VAPT",
      "Web Security",
      "Vulnerability Assessment",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-emerald-400 mb-4">
          Technical Skills
        </p>

        <h2 className="text-5xl font-bold text-white mb-16">
          Technologies &
          <span className="text-emerald-400">
            {" "}Expertise
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{once: false,amount:  0.8 }}
              transition={{
                delay: index * 0.1,
              }}
              className="
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
              <h3 className="text-xl font-semibold text-white mb-6">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                    px-3
                    py-2
                    rounded-full
                    bg-slate-800
                    text-slate-300
                    hover:bg-emerald-500
                    hover:text-white
                    transition-all
                    duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}