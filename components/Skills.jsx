import Image from "next/image";
import SkillsCard from "./SkillsCard";
import { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";

function Skills() {
  const myRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: myRef,
    offset: ["start 0.9", "start start"],
  });

  useEffect(() => {
    scrollYProgress.on("change");
  });
  return (
    <motion.div
      id="skills"
      ref={myRef}
      style={{ opacity: scrollYProgress }}
      className="w-full mt-[180px] text-center">
      <article className="w-[80%] m-auto text-center my-11">
        <h1 className="text-2xl uppercase md:text-6xl md:font-bold md:mb-6">
          My Skill Set
        </h1>
      </article>
      <div className="w-full  md:grid md:grid-cols-2 md:gap-10  ">
        <div
          style={{ opacity: scrollYProgress }}
          className="w-[80%] mb-10 m-auto h-[400px] bg-pink-900 shadow-2xl transition-all duration-500 rounded-2xl sm:w-[60%]">
          <SkillsCard
            title="JavaScript"
            summary="I bring Websites to life with JavaScript, adding interactive features and optimizing performance with clean and efficient code">
            <Image
              src="/jsLogo.png"
              alt="jsLogo"
              width={300}
              height={300}
              className="object-fill h-[50%] m-auto text-center"
            />
          </SkillsCard>
        </div>

        <div
          style={{ opacity: scrollYProgress }}
          className="w-[80%] mb-10 m-auto h-[400px] bg-pink-900 shadow-2xl rounded-2xl sm:w-[60%]">
          <SkillsCard
            title="HTML5"
            summary="Beyond markup, HTML is crucial for an inclusive web. I structure content carefully for universal accesibility.">
            <Image
              src="/html5.jpeg"
              alt="htmlLogo"
              width={300}
              height={300}
              className="object-fill h-[50%] m-auto text-center"
            />
          </SkillsCard>
        </div>

        <div
          style={{ opacity: scrollYProgress }}
          className="w-[80%] mb-10 m-auto h-[400px] bg-pink-900 shadow-2xl rounded-2xl sm:w-[60%]">
          <SkillsCard
            title="CSS"
            summary="I prioritize pixel perfection, paying close attention to details for visually polished and precisely alligned designs, ensuring a seamless user experience. ">
            <Image
              src="/csslogo.png"
              alt="cssLogo"
              width={300}
              height={300}
              className="object-fill h-[50%] m-auto text-center"
            />
          </SkillsCard>
        </div>

        <div
          style={{ opacity: scrollYProgress }}
          className="w-[80%] mb-10 m-auto  h-[400px] bg-pink-900 shadow-2xl rounded-2xl sm:w-[60%]">
          <SkillsCard
            title="NextJs"
            summary="Using Next, I craft scalable user interface with components, state management and virtual DOM manipulation for seamless web applications. ">
            <Image
              src="/nextLogo.png"
              alt="nextLogo"
              width={300}
              height={300}
              className="object-fill h-[50%] m-auto text-center"
            />
          </SkillsCard>
        </div>

        <div className="w-[80%] mb-10 m-auto h-[400px] bg-pink-900 shadow-2xl rounded-2xl sm:w-[60%]">
          <SkillsCard
            title="ReactJs"
            summary="Using React, I craft scalable user interface with components, state management and virtual DOM manipulation for seamless web applications.">
            <Image
              src="/reactlogo.png"
              alt="reactLogo"
              width={300}
              height={300}
              className="object-fill h-[50%] m-auto text-center"
            />
          </SkillsCard>
        </div>

        <div className="w-[80%] mb-10 m-auto h-[400px] bg-pink-900 shadow-2xl rounded-2xl sm:w-[60%]">
          <SkillsCard
            title="Tailwind CSS"
            summary="I use the tailwind css framework to build seamless web applicatons.">
            <Image
              src="/tailwindlogo.png"
              alt="tailwindLogo"
              width={300}
              height={300}
              className="object-fill h-[50%] m-auto text-center"
            />
          </SkillsCard>
        </div>

        <div className="w-[80%] mb-10 m-auto h-[400px] bg-pink-900 shadow-2xl rounded-2xl sm:w-[60%]">
          <SkillsCard
            title=" TypeScript"
            summary="I use TypeScript to write a more maintainable and robust code.">
            <Image
              src="/tslogo.png"
              alt="typescriptLogo"
              width={300}
              height={300}
              className="object-fill h-[50%] m-auto text-center"
            />
          </SkillsCard>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
