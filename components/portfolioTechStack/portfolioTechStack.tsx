import type { ComponentType } from "react";
import type { Tech } from "@/content/home";
import CSSLogo from "../logos/CSSLogo";
import FlowLogo from "../logos/FlowLogo";
import FormspreeLogo from "../logos/FormspreeLogo";
import HTMLLogo from "../logos/HTMLLogo";
import JavaScriptLogo from "../logos/JavaScriptLogo";
import MUILogo from "../logos/MUILogo";
import NextLogo from "../logos/NextLogo";
import PHPLogo from "../logos/PHPLogo";
import Prismic from "../logos/Prismic";
import ReactLogo from "../logos/ReactLogo";
import SassLogo from "../logos/SassLogo";
import TailwindLogo from "../logos/TailwindLogo";
import TypeScriptLogo from "../logos/TypeScriptLogo";
import Vercel from "../logos/Vercel";
import VueLogo from "../logos/VueLogo";
import WordpressLogo from "../logos/WordpressLogo";

const logos: Record<Tech, ComponentType<{ style: string }>> = {
  css: CSSLogo,
  flow: FlowLogo,
  formspree: FormspreeLogo,
  html: HTMLLogo,
  javascript: JavaScriptLogo,
  mui: MUILogo,
  next: NextLogo,
  php: PHPLogo,
  prismic: Prismic,
  react: ReactLogo,
  sass: SassLogo,
  tailwind: TailwindLogo,
  typescript: TypeScriptLogo,
  vercel: Vercel,
  vue: VueLogo,
  wordpress: WordpressLogo,
};

type PropTypes = {
  tech: Tech[];
};

function PortfolioTechStack({ tech }: PropTypes) {
  return (
    <div className="flex h-[80px] w-full flex-row flex-wrap items-center justify-start gap-5 pt-10">
      {tech.map((name) => {
        const Logo = logos[name];
        return <Logo key={name} style="portfolio-tech-stack-logo" />;
      })}
    </div>
  );
}

export default PortfolioTechStack;
