import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 px-8">

      
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount:0.5}}
          transition={{ duration: 1.0 }}
        >

          <p className="text-emerald-400 mb-4">
            About Me
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Building Technology
            <span className="text-emerald-400">
              {" "}That Solves Problems
            </span>
          </h2>

          <p
            className="
            mt-8
            max-w-4xl
            text-slate-300
            text-lg
            leading-relaxed
            "
          >
            I am a B.Tech graduate in Artificial Intelligence
            & Data Science from NBKR Institute of Science
            and Technology. My interests span software
            engineering, machine learning, cybersecurity,
            and research-oriented analytics.

            I enjoy building scalable applications,
            exploring intelligent systems, and applying
            data-driven approaches to solve real-world
            challenges.
          </p>

        </motion.div>

      </div>
    </section>
  );
}