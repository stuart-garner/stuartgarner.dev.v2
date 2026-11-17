"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { about, profilePicture } from "@/content/home";
import SocialLinks from "../socialLinks/SocialLinks";

const HomePageAbout = () => {
  return (
    <section
      id="about-section"
      className="bg-light-about-background dark:bg-dark-about-background"
    >
      <div className="container bg-light-about-background text-gray-600 dark:bg-dark-about-background dark:text-gray-300">
        <div className="flex flex-col-reverse items-center justify-start gap-20 lg:flex-row lg:items-start">
          <div className="lg:basis-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2>About Me</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-10 space-y-8 text-xl md:columns-1 md:gap-12 xl:text-2xl"
            >
              {about}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:max-w-[400px] lg:max-w-none lg:basis-1/2"
          >
            <Image
              {...profilePicture}
              alt={profilePicture.alt}
              priority
              className="rounded-[5%]"
            />
          </motion.div>
        </div>
        <SocialLinks colour="fill-light-icons dark:fill-dark-icons" />
      </div>
    </section>
  );
};

export default HomePageAbout;
