import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      value: "2708",
      title: "GATE DA Rank",
    },
    {
      value: "2",
      title: "IEEE Leadership Roles",
    },
    {
      value: "1",
      title: "Cybersecurity Internship",
    },
    {
      value: "3+",
      title: "Major Projects",
    },
  ];

  return (
    <section className="pb-28 px-8">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item, index) => (
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
              viewport={{once: false,amount:  0.8 }}
              transition={{
                delay: index * 0.15,
              }}
              className="
              bg-slate-900/60
              backdrop-blur-lg
              border
              border-slate-800
              rounded-3xl
              p-8
              text-center
              hover:border-emerald-400
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >
              <h3 className="text-5xl font-bold text-emerald-400">
                {item.value}
              </h3>

              <p className="text-slate-300 mt-4">
                {item.title}
              </p>

            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}