import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  
  
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_ezfhl9e",
        "template_ck7np7p",
        form.current,
        "S6ObqnRB4iJ0MoG-M"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        () => {
          setStatus("Failed to send message.");
          setLoading(false);
        }
      );
  };
  
  return (
    <section
      id="contact"
      className="py-28 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-emerald-400 mb-4">
          Get In Touch
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Let's Build Something
          <span className="text-emerald-400">
            {" "}Amazing
          </span>
        </h2>

        <p className="text-slate-300 max-w-3xl mb-16">
          Whether it's a research opportunity,
          software development role, internship,
          collaboration, or innovative project,
          I'd be happy to connect and discuss.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{once: false,amount:  0.8 }}
            className="
            p-8
            rounded-3xl
            bg-slate-900/60
            backdrop-blur-lg
            border
            border-slate-800
            "
          >

            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div>
                <p className="text-emerald-400">
                  Email
                </p>

                <p className="text-slate-300">
                  vikramvemanaboina70@gmail.com
                </p>
              </div>

              <div>
                <p className="text-emerald-400">
                  Education
                </p>

                <p className="text-slate-300">
                  B.Tech - Artificial Intelligence & Data Science
                </p>
              </div>



            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{once: false,amount:  0.2 }}
            className="
            p-8
            rounded-3xl
            bg-slate-900/60
            backdrop-blur-lg
            border
            border-slate-800
            "
          >

            <div className="space-y-5">

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                autoComplete="off"
                className="
                w-full
                p-4
                rounded-xl
                bg-slate-800
                text-white
                outline-none
                "
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                autoComplete="off"
                required
                className="
                w-full
                p-4
                rounded-xl
                bg-slate-800
                text-white
                outline-none
                "
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                name="message"
                required
                className="
                w-full
                p-4
                rounded-xl
                bg-slate-800
                text-white
                outline-none
                resize-none
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
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
                disabled:opacity-50
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              
              {status && (
                <p className="text-emerald-400 mt-4">
                  {status}
                </p>
              )}

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}