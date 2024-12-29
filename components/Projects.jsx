import Link from "next/link";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";

function Projects() {
  const myRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: myRef,
    offset: ["start end", "start start"],
  });

  useEffect(() => {
    scrollYProgress.on("change");
  });
  return (
    <div id="projects" className="mt-[200px] w-full ">
      <motion.article
        ref={myRef}
        style={{ opacity: scrollYProgress }}
        className="text-center w-[80%] mb-[80px] m-auto">
        <h1 className="text-2xl uppercase md:text-6xl md:font-bold md:mb-6">
          Selected Works
        </h1>
        <div className="md:max-w-[300px] m-auto">
          <p className="md:text-2xl">
            I&apos;ve played a key role in developing impactful projects.
            Here&apos;s a curated selection showcasing my expertise and the
            achieved results.
          </p>
        </div>
      </motion.article>
      <motion.div className="w-[80%] m-auto">
        <div className="w-[100%] md:grid md:m-auto md:grid-cols-3 m-auto md:mx-6 md:gap-5  mt-[60px]">
          <ProjectCard
            title="A Job Hub Website"
            skill="HTML, CSS, JavaScript, React, Redux, Tailwind">
            <Link target="_blank" href="https://nxgjobhub.com">
              <Image
                src="/nxgJobHub.png"
                alt="screenshot"
                width={500}
                height={500}
                className="object-fill h-[70%] rounded-2xl"
              />
            </Link>
          </ProjectCard>
          <ProjectCard
            title="A Mock Test Website"
            skill="HTML, CSS, ReactJs,TypeScript,Redux">
            <Link target="_blank" href="https://www.lynspeed.com.ng/">
              <Image
                src="/lynspeed.png"
                alt="roomImg"
                width={500}
                height={500}
                className="object-fill h-[70%] rounded-2xl"
              />
            </Link>
          </ProjectCard>

          <ProjectCard
            title="A Money Management Website"
            skill="HTML, JavaScript, React, Tailwind,Redux">
            <div className="h-full">
              <Link target="_blank" href="https://payina.com.ng/">
                <Image
                  src="/payina.png"
                  alt="bankImg"
                  width={500}
                  height={500}
                  className="object-fill h-[70%] rounded-2xl"
                />
              </Link>
            </div>
          </ProjectCard>

          <ProjectCard
            title="An IT Company Website"
            skill=" HTML, Tailwind, JavaScript, Reactjs, ">
            <Link target="_blank" href="https://nextgenhub.com.ng/">
              <Image
                src="/nextgenhub.png"
                alt="ecommerceImg"
                width={500}
                height={500}
                className="object-fill h-[70%] rounded-2xl"
              />
            </Link>
          </ProjectCard>

          <ProjectCard title="Porfolio 1.0" skill="HTML, CSS, JavaScript">
            <Link
              target="_blank"
              href="https://keneson-personal-website.netlify.app/">
              <Image
                src="/portfolio-edit.png"
                alt="portfolioImg"
                width={500}
                height={500}
                className="object-fill h-[73%] rounded-2xl"
              />
            </Link>
          </ProjectCard>

          <ProjectCard
            title="Space Website"
            skill="HTML, tailwind, ReactJs, JavaScript">
            <Link
              target="_blank"
              href="https://spacetourismreact2.netlify.app/">
              <Image
                src="/space.png"
                alt="spaceImg"
                width={500}
                height={500}
                className="object-fill h-[70%] rounded-2xl"
              />
            </Link>
          </ProjectCard>

          <ProjectCard
            title="A website For Searching Cars"
            skill="HTML, Tailwind,  NextJs, TypeScript">
            <Link
              target="_blank"
              href="https://cars-keneson-git-main-godwinokechukwus-projects.vercel.app/">
              <Image
                src="/cars-edit.png"
                alt="carsImg"
                width={500}
                height={500}
                className="object-fill h-[73%] rounded-2xl"
              />
            </Link>
          </ProjectCard>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
