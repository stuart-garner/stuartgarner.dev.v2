import { projects } from "@/content/home";
import TopWave from "../waves/Top";
import PortfolioProject from "./PortfolioProject";

const HomePagePortfolio = () => {
  return (
    <section
      id="portfolio-section"
      className="bg-light-portfolio-background pt-[150px] md:pt-[150px] xl:pt-[230px] 2xl:pt-[300px] dark:bg-dark-portfolio-background"
    >
      <TopWave colour="fill-light-blog-background dark:fill-dark-blog-background" />
      <div className="container">
        <h2>Portfolio</h2>
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          {projects.map((project) => (
            <PortfolioProject key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePagePortfolio;
