"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/content/home";
import PortfolioTechStack from "../portfolioTechStack/portfolioTechStack";

type PropsType = {
  project: Project;
};

const PortfolioProject = ({ project }: PropsType) => {
  const { title, description, screenshot, tech, liveUrl, githubUrl } = project;

  return (
    <div className="flex flex-col gap-10 text-light-default dark:text-dark-default">
      {screenshot && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            {...screenshot}
            alt={screenshot.alt}
            className="mt-10 rounded-xl bg-light-custom-gradient lg:mt-0 lg:mb-0 dark:bg-dark-custom-gradient"
          />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3>{title}</h3>
        <div className="space-y-6">{description}</div>

        {(liveUrl || githubUrl) && (
          <div className="flex gap-2 pt-3">
            {liveUrl && (
              <Link
                className="button px-5 py-2"
                href={liveUrl}
                aria-label="Live project"
                target="_blank"
              >
                Live
              </Link>
            )}
            {githubUrl && (
              <Link
                className="button px-5 py-2"
                href={githubUrl}
                aria-label="Project repo"
                target="_blank"
              >
                GitHub
              </Link>
            )}
          </div>
        )}
        {tech.length > 0 && <PortfolioTechStack tech={tech} />}
      </motion.div>
    </div>
  );
};

export default PortfolioProject;
