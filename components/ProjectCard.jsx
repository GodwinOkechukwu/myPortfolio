import { useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";

function ProjectCard({ children, title, skill }) {
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
      className="w-[100%] h-[300px] mb-[80px] sm:h-[300px] sm:mt-[80px] md:mt-[140px] md:h-[400px]  md:m-auto sm:w-[80%] md:w-[95%] md:mx-8 rounded-lg bg-transparent transition-all duration-500 shadow-sm m-auto hover:w-[100%] hover:opacity-[0.5]">
      <div className="w-full h-[100px]">
        <h1 className="md:text-[18px]">Title: {title}</h1>
        <h2 className="md:text-[18px]">Skills:{skill}</h2>
      </div>
      {children}
    </motion.div>
  );
}

export default ProjectCard;
