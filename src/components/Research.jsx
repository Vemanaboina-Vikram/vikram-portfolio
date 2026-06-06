import { motion } from "framer-motion";

const workflow = [
  "Climate Data Collection",
  "Feature Engineering",
  "LSTM Forecasting",
  "ONI Prediction",
  "Monsoon Impact Analysis",
];

export default function Research() {
  return (
    <section
      id="research"
      className="py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-emerald-400 mb-4">
          Research & Innovation
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
          Assessing El Niño &
          <span className="text-emerald-400">
            {" "}La Niña's Impact
          </span>
          <br />
          on World Monsoons
        </h2>

        <p
          className="
          text-slate-300
          max-w-4xl
          text-lg
          leading-relaxed
          mb-16
          "
        >
          Developed a machine learning driven forecasting system
          to analyze the impact of El Niño and La Niña events on
          global monsoon patterns. The project leverages climate
          datasets, LSTM forecasting, Flask APIs, and predictive
          analytics to improve ENSO impact assessment.
        </p>

        {/* Workflow */}

        <div className="grid md:grid-cols-5 gap-6">

          {workflow.map((step, index) => (
            <motion.div
              key={step}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{once: false,amount:  0.2 }}
              transition={{
                delay: index * 0.15,
              }}
              className="
              relative
              p-6
              rounded-3xl
              bg-slate-900/60
              backdrop-blur-lg
              border
              border-slate-800
              hover:border-emerald-400
              transition-all
              duration-300
              text-center
              "
            >
              <div
                className="
                w-12
                h-12
                mx-auto
                mb-4
                rounded-full
                bg-emerald-500
                flex
                items-center
                justify-center
                font-bold
                "
              >
                {index + 1}
              </div>

              <h3 className="text-white font-semibold">
                {step}
              </h3>

            </motion.div>
          ))}
        </div>

        {/* Technologies */}

        <div className="mt-16 flex flex-wrap gap-4 justify-center">

          {[
            "Python",
            "Flask",
            "LSTM",
            "Machine Learning",
            "Data Analytics",
            "Forecasting",
            "Climate Data",
          ].map((tech) => (
            <span
              key={tech}
              className="
              px-5
              py-3
              rounded-full
              bg-slate-900
              border
              border-emerald-400/30
              text-slate-300
              "
            >
              {tech}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}