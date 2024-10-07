import React from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { PrismicNextImage } from "@prismicio/next";
import { HomepageDocumentDataClientsItem } from "@sg/prismicio-types";

type PropsType = {
  clients: HomepageDocumentDataClientsItem[] | null | undefined;
  colour: string;
};

type LogoPropTypes = {
  item: any;
  label: string;
  href: string;
};

const ClientList = (props: PropsType) => {
  const { clients } = props;
  let delay = 0;
  const ClientLogo = (props: LogoPropTypes) => {
    const { href, label, item } = props;
    delay = delay + 0.1;
    return (
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          repeat: 0,
          duration: 0.5,
          delay,
        }}
        viewport={{ once: true }}
      >
        <PrismicNextImage
          field={item.client_logo}
          className="h-5 opacity-50 md:h-10"
        />
      </motion.div>
    );
  };
  return (
    <div className="flex  justify-center ">
      <div className="flex w-full flex-wrap justify-center gap-10 pt-[200px] lg:max-w-[60%]">
        {clients?.map((item: any) => (
          <ClientLogo
            key={uuidv4()}
            href="https://www.linkedin.com/in/stuartjgarner/"
            label="LinkedIn"
            item={item}
          ></ClientLogo>
        ))}
      </div>
    </div>
  );
};

export default ClientList;
