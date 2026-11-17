"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { intro, introSummary } from "@/content/home";
import BottomWave from "../waves/Bottom";

const HomePageIntro = () => {
  return (
    <section
      id="intro-section"
      className="h-screen min-h-[700px] bg-light-custom-gradient md:min-h-[800px] xl:min-h-[600px] 2xl:max-h-[980px] dark:bg-dark-custom-gradient"
    >
      <div className="container flex h-full items-center justify-between">
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>{intro}</h1>
            <p className="max-w-3xl text-xl text-yellow-100 xl:text-2xl">
              {introSummary}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap gap-5"
          >
            <Link
              className="button flex items-center gap-5"
              href="/#contact-form"
              scroll={false}
            >
              Get in touch
              <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
            </Link>
            <Link
              className="button button-secondary flex items-center gap-5"
              href="/#portfolio-section"
              scroll={false}
            >
              See my work
              <FontAwesomeIcon icon={faArrowDown} className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
      <BottomWave colour="fill-light-about-background dark:fill-dark-about-background" />
    </section>
  );
};

export default HomePageIntro;
