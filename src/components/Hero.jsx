import { motion } from "framer-motion";
import avatar from "../assets/avatar/vikram.jpg";
import ParticleBackground from "./ParticleBackground";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      <ParticleBackground />

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div
          className="
          absolute
          top-20
          left-10
          w-96
          h-96
          bg-emerald-500/20
          blur-3xl
          rounded-full
          "
        />

        <div
          className="
          absolute
          bottom-20
          right-10
          w-96
          h-96
          bg-cyan-500/20
          blur-3xl
          rounded-full
          "
        />

      </div>
      <div className="relative z-[9999] max-w-[1400px] mx-auto px-8 pt-32">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div><div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}

          <div className="relative z-[9999]">

            <p className="text-emerald-400 mb-6">
              Welcome to my portfolio
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="leading-none"
            >
              <span className="block text-4xl sm:text-5xl lg:text-7xl font-black text-white">
                VEMANABOINA
              </span>

              <span className="block text-4xl sm:text-5xl lg:text-7xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text "
              >
                VIKRAM
              </span>
            </motion.h1>

            <p
              className="
              text-slate-300
              text-base md:text-lg
              mt-8
              max-w-xl
              leading-relaxed
              "
            >
            AI & Data Science graduate passionate about software engineering, machine learning, cybersecurity, and research-driven innovation. Dedicated to building impactful solutions through technology and data.
            </p>

            {/* TAGS */}

            <div className="flex flex-wrap gap-3 mt-8">

              <span className="px-3 py-1.5 rounded-full bg-slate-800">
                AI & DS Graduate
              </span>

              <span className="px-3 py-1.5 rounded-full bg-slate-800">
                GATE DA Rank 2708
              </span>

              <span className="px-3 py-1.5 rounded-full bg-slate-800">
                IEEE Leader
              </span>

            </div>

            {/* BUTTONS */}

            <div className="flex  flex-col sm:flex-row gap-5 mt-10 relative z-[9999]">


            <button
              onClick={() => {
                const section = document.getElementById("projects");
                console.log(section);

                section?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="
              cursor-pointer
              px-8
              py-4
              rounded-xl
              bg-gradient-to-r
              from-emerald-500
              to-cyan-500
              font-medium
              hover:scale-105
              transition-all
              duration-300
              "
             >
              View Projects
            </button>

            <button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="
              px-8
              py-4
              rounded-xl
              border
              border-slate-700
              hover:border-emerald-400
              transition-all
              duration-300
              "
            >
              Download Resume
            </button>



            </div>

          </div>

          {/* RIGHT SIDE */}

          <motion.div
            className="relative flex justify-center items-center"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 1, 0, -1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="relative w-[320px] h-[320px] md:w-[470px] md:h-[470px]">

              {/* ROTATING RINGS */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                absolute
                inset-[40px]
                rounded-full
                border
                border-emerald-400/20
                "
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                absolute
                inset-[15px]
                rounded-full
                border
                border-cyan-400/20
                "
              />

              {/* PROFILE IMAGE */}

              <div
                className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[240px]
                h-[240px]
                md:w-[340px]
                md:h-[340px]
                rounded-full
                border-2
                border-emerald-400
                overflow-hidden
                shadow-[0_0_80px_rgba(16,185,129,0.25)]
                "
              >
                <img
                  src={avatar}
                  alt="Vikram"
                  className="
                  w-full
                  h-full
                  object-cover
                  object-top
                  "
                />
              </div>

              {/* ORBIT SKILLS */}

              {[
                { name: "Python", top: "0%", left: "40%" },
                { name: "Java", top: "25%", left: "84%" },
                { name: "ML", top: "67%", left: "88%" },
                { name: "Cybersecurity", top: "91%", left: "36%" },
                { name: "Git", top: "67%", left: "3%" },
                { name: "Flask", top: "25%", left: "0%" },
                
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="
                  hidden md:block
                  absolute
                  px-4
                  py-2
                  rounded-xl
                  bg-slate-900/80
                  backdrop-blur-md
                  border
                  border-emerald-400/30
                  shadow-lg
                  hover:border-emerald-400
                  transition-all
                  duration-300
                  "
                  style={{
                    top: skill.top,
                    left: skill.left,
                  }}
                >
                  {skill.name}
                </div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

       

    </section>
  );
}