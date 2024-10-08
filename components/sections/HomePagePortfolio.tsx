import { PrismicRichText } from "@prismicio/react";
import { v4 as uuidv4 } from "uuid";
import { RTNode } from "@prismicio/types";
import TopWave from "../waves/Top";
import PortfolioProject from "./PortfolioProject";
import { HomepageDocumentDataPortfolioItem } from "@sg/prismicio-types";

type PropType = {
  heading: [] | [RTNode, ...RTNode[]] | null | undefined;
  content: HomepageDocumentDataPortfolioItem[] | null | undefined;
};

const HomePagePortfolio = (props: PropType) => {
  const { heading, content } = props;
  return (
    <section
      id="portfolio-section"
      className="bg-light-portfolio-background dark:bg-dark-portfolio-background  pt-[150px] md:pt-[150px] xl:pt-[230px] 2xl:pt-[300px]"
    >
      <TopWave colour="fill-light-blog-background dark:fill-dark-blog-background" />
      <div className="container">
        <PrismicRichText field={heading} />
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          {content?.map((item: any, index: number) => {
            return <PortfolioProject key={uuidv4()} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HomePagePortfolio;
