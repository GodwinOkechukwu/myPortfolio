import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

function Contact() {
  const myRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: myRef,
    offset: ["start end", "start start"],
  });

  useEffect(() => {
    scrollYProgress.on("change");
  });
  return (
    <footer id="footer" className="bg- w-full pb-20">
      <motion.div
        ref={myRef}
        style={{ opacity: scrollYProgress }}
        className="w-[80%] m-auto text-center">
        <article className="text-center">
          <h1 className="text-2xl uppercase md:text-6xl md:font-bold md:mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-2xl">Get in touch with me @</p>
        </article>
        <div className="flex justify-between gap-9 w-[full] m-auto text-center md:mt-[50px] md:flex-col md:items-center mt-6">
          <Link
            href="https://www.facebook.com/godwin.okechukwu.127?mibextid=ZbWKwL"
            target="_blank">
            <Image
              src="/facebook.svg"
              alt="facebookLogo"
              width={30}
              height={30}
              className="bg-white p-1 hover:bg-pink-500 transition-all duration-500 md:w-[50px]"
            />
          </Link>

          <Link
            href="https://www.instagram.com/okechukwugodwin10?igsh=MXMxOHVzYzR2Z3Q1bQ=="
            target="_blank">
            <Image
              src="/instagram.svg"
              alt="instagramLogo"
              width={30}
              height={30}
              className="bg-white p-1 hover:bg-pink-500 transition-all duration-500 md:w-[50px]"
            />
          </Link>
          <Link
            href="https://x.com/keneson100?t=1XIyoPPwcn4IKSzEKNM3nQ&s=09"
            target="_blank">
            <Image
              src="/x-twitter.svg"
              alt="twitterLogo"
              width={30}
              height={30}
              className="bg-white p-1 hover:bg-pink-500 transition-all duration-500 md:w-[50px]"
            />
          </Link>
          <Link href="https://Wa.me/23408158212395">
            <Image
              src="/whatsapp.svg"
              alt="whatsappLogo"
              width={30}
              height={30}
              className="bg-white p-1 hover:bg-pink-500 transition-all duration-500 md:w-[50px]"
            />
          </Link>

          <Link href="https://github.com/GodwinOkechukwu" target="_blank">
            <Image
              src="/github.svg"
              alt="githubLogo"
              width={30}
              height={30}
              className="bg-white p-1 hover:bg-pink-500 transition-all duration-500 md:w-[50px]"
            />
          </Link>
        </div>
        <article className="text-left mt-9 text-[12px]">
          <p className="flex items-center">
            <span className="space-x-2">
              <Image
                src="/copyright.svg"
                width={20}
                height={20}
                alt="copyrightLogo"
                className="bg-white px-1 items-center mr-1"
              />
            </span>
            2024 KENESON
          </p>
          <p>All rights reserved</p>
        </article>
      </motion.div>
    </footer>
  );
}

export default Contact;
