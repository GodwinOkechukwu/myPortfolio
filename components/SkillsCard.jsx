import { useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";

function SkillsCard({ children, title, summary }) {
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
      className="w-full ">
      <div className="py-[40px] space-y-6 w-[80%] m-auto h-[200px] mb-6 ">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-[14px] md:text-[18px]">{summary}</p>
      </div>
      <div className="h-[300px] w-[80%] m-auto">{children}</div>
    </motion.div>
  );
}

export default SkillsCard;
