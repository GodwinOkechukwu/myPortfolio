import { useScroll, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

function Resume() {
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
      id="resume"
      ref={myRef}
      style={{ opacity: scrollYProgress }}
      className="w-full my-[180px]">
      <article className="w-[80%] m-auto text-center">
        <h1 className="text-2xl uppercase md:text-6xl md:font-bold md:mb-6">
          My Resume
        </h1>
        <div className="mt-[80px]">
          <button className="w-[70%] relative bg-transparent transition-all duration-500 text-center rounded-full text-white border border-pink-500 py-4 hover:border-black hover:bg-pink-500 md:w-[35%]">
            <Link href="/mylatestcv.pdf" target="_blank">
              View Resume
            </Link>
            <svg
              className="absolute top-3 md:w-[30%] right-[10%] hover:w-[20%] transition-all duration-500 "
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.3">
                <path
                  d="M20 0H10C4.47715 0 0 4.47715 0 10V20C0 25.5228 4.47715 30 10 30H20C25.5228 30 30 25.5228 30 20V10C30 4.47715 25.5228 0 20 0Z"
                  fill="white"
                />
              </g>
              <path
                d="M9.1667 15H20.8334"
                stroke="white"
                strokewidth="1.5"
                strokelinecap="round"
                strokelinejoin="round"
              />
              <path
                d="M16.6667 10.8331L20.8334 14.9998L16.6667 19.1665"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </article>
    </motion.div>
  );
}

export default Resume;
