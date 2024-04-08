"use client";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
function About() {
  const myRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: myRef,
    offset: ["start end", "start start"],
  });

  useEffect(() => {
    scrollYProgress.on("change");
  });
  return (
    <motion.div
      ref={myRef}
      style={{ opacity: scrollYProgress }}
      id="about"
      className="m-auto w-full text-center pt-[150px] md:pt-[300px]">
      <article className="w-[80%] m-auto space-y-6 ">
        <h1 className="text-5xl font-bold md:text-6xl">
          I&apos;m Godwin,
          <br /> A Creative Frontend Developer
        </h1>
        <div className="max-w-[500px] m-auto">
          <p className="md:text-2xl">
            I develop accessible, responsive,interactive,and animated websites
            with a strong focus on performance.
          </p>
        </div>
      </article>
    </motion.div>
  );
}

export default About;
