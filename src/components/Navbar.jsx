import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
      fixed
      top-0
      left-0
      w-full
      z-10000
      transition-all
      duration-300
      ${
        scrolled
          ? "backdrop-blur-md bg-slate-950/70 border-b border-slate-800"
          : "bg-transparent"
      }
      `}
    >
      <div
        className="
        max-w-7xl
        mx-auto
        flex
        justify-between
        items-center
        px-8
        py-5
        "
      >
        <h1 className="text-xl font-bold text-emerald-400">
          VIKRAM 
        </h1>

        <ul className="flex flex-wrap justify-center gap-8">

          <li><a href="#about" className="hover:text-emerald-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-emerald-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-emerald-400 transition">Projects</a></li>
          <li><a href="#experience" className="hover:text-emerald-400 transition">Experience</a></li>
          <li><a href="#contact" className="hover:text-emerald-400 transition">Contact</a></li>
          


        </ul>
      </div>
    </nav>
  );
}