"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className=" box-border">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}
