import { PrismicRichText } from "@prismicio/react";
import BottomWave from "../waves/Bottom";
import { RTNode } from "@prismicio/types";

type PropsType = {
  title: [] | [RTNode, ...RTNode[]] | null | undefined;
};

const BlogPageHeader = ({ title }: PropsType) => {
  return (
    <section
      id="blog-header"
      className="bg-light-custom-gradient dark:bg-dark-custom-gradient min-h-[400px] text-white "
    >
      <div className="container">
        <PrismicRichText field={title} />
      </div>
      <BottomWave colour="fill-light-blog-background dark:fill-dark-blog-background" />
    </section>
  );
};

export default BlogPageHeader;
