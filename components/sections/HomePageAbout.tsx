import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import {
  EmptyImageFieldImage,
  FilledImageFieldImage,
  RTNode,
} from "@prismicio/types";
import { PrismicNextImage } from "@prismicio/next";
import SocialLinks from "../socialLinks";

type PropType = {
  heading: [] | [RTNode, ...RTNode[]] | null | undefined;
  body: [] | [RTNode, ...RTNode[]] | null | undefined;
  profilePicture:
    | EmptyImageFieldImage
    | FilledImageFieldImage
    | null
    | undefined;
};

const HomePageAbout = (props: PropType) => {
  const { heading, body, profilePicture } = props;
  return (
    <section
      id="about-section"
      className="bg-light-about-background dark:bg-dark-about-background"
    >
      <div className="container bg-light-about-background dark:bg-dark-about-background text-gray-600 dark:text-gray-300">
        <div className="flex flex-col-reverse items-center justify-start gap-20 lg:flex-row lg:items-start">
          <div className="lg:basis-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ repeat: 0, duration: 0.5 }}
              className="mb-10"
            >
              <PrismicRichText field={heading} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ repeat: 0, duration: 0.5 }}
              className="mb-10  text-xl md:columns-1 md:gap-12 xl:text-2xl"
            >
              <PrismicRichText field={body} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ repeat: 0, duration: 1 }}
            className="w-full md:max-w-[400px] lg:max-w-none lg:basis-1/2"
          >
            <PrismicNextImage field={profilePicture} className="rounded-[5%]" />
          </motion.div>
        </div>
        <SocialLinks colour={"fill-light-icons dark:fill-dark-icons"} />
      </div>
    </section>
  );
};

export default HomePageAbout;
