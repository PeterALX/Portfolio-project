import { HomeModernIcon } from "@heroicons/react/24/solid"
import Link from "next/link";
import About from "./ui/About";
import Contact from "./ui/Contact";
import Experience from "./ui/Experience";
import Header from "./ui/Header";
import Hero from "./ui/Hero";
import Projects from "./ui/Projects";
import Skills from "./ui/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#28E98C]/80">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="Contact" className="snap-start">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="border border-transparent hover:border-[#28E98C]/70 cursor-pointer fixed bottom-5 right-40 flex items-center justify-center p-2 rounded-full transition-colors">
          <HomeModernIcon className="h-6 w-6 text-gray-500 hover:text-[#26E96C]/70 transition-colors" />
        </footer>
      </Link>
    </div>
  );
}
