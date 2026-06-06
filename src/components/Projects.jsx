import { motion } from "framer-motion";
import bankingLogin from "../assets/projects/banking-login.png";
import counsellingSystem from "../assets/projects/counselling-system.png";
import ensoProject from "../assets/projects/enso-project.png";

const projects = [

    {
  title: "Banking Management System",

  description:
    "Developed a Java-based Banking Management System featuring secure authentication, account creation, balance inquiry, deposits, customer management, and administrative controls through an intuitive desktop interface.",

  tech: ["Java", "Swing", "Database"],

  image: bankingLogin,

  color: "from-emerald-500/20 to-cyan-500/20",
},

  {
    title: "Student Counselling Management System",
    description:
      "Developed a web-based Student Counselling Management System to digitize counselling records and eliminate manual paper-based tracking. The platform enables administrators, counsellors, and students to manage academic performance, semester-wise progress, counselling history, and student records through a centralized system.",
    tech: ["HTML", "CSS", "JavaScript", "PHP","SQL"],
    image: counsellingSystem,
    color: "from-cyan-500/20 to-blue-500/20",
  },

  {
  title: "ENSO Impact Assessment & Monsoon Forecasting System",

  description:
    "Developed a Flask-based climate analytics platform to assess the impact of El Niño and La Niña on global monsoon patterns. Integrated LSTM forecasting models, machine learning techniques, and climate datasets to predict the Oceanic Niño Index (ONI) and provide insights into future monsoon behavior.",

  tech: [
    "Python",
    "Flask",
    "LSTM",
    "Machine Learning"
  ],

  image: ensoProject,

  color: "from-emerald-500/20 to-green-500/20",
},
];

export default function Projects() {
  return (
    <section
      id="projects"
      name="projects"
      className="py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-emerald-400 mb-4">
          Featured Work
        </p>

        <h2 className="text-5xl font-bold text-white mb-16">
          My
          <span className="text-emerald-400">
            {" "}Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                delay: index * 0.15,
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/60
              backdrop-blur-lg
              p-6
              transition-all
              duration-300
              hover:border-emerald-400/40
              "
            >

              {/* Glow */}

              <div
                className={`
                absolute
                inset-0
                bg-gradient-to-br
                ${project.color}
                opacity-0
                hover:opacity-100
                transition-all
                duration-500
                `}
              />

              <div className="relative z-10">

                {project.image && (
                    <div className="mb-6 overflow-hidden rounded-2xl border border-slate-700">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="
                        w-full
                        h-65
                        object-contain
                        bg-slate-950
                        p-2
                        transition-all
                        duration-700
                        group-hover:scale-110
                        "
                      />
                    </div>
                  )}

                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                      px-3
                      py-2
                      rounded-full
                      bg-slate-800
                      text-slate-300
                      text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}