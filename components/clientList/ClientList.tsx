"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { ImageData } from "@/content/home";

type PropsType = {
  clients: ImageData[];
};

const ClientList = ({ clients }: PropsType) => {
  return (
    <div className="flex justify-center">
      <div className="flex w-full flex-wrap justify-center gap-10 pt-[200px] lg:max-w-[60%]">
        {clients.map((client, index) => (
          <motion.div
            key={client.src}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              {...client}
              alt={client.alt}
              className="h-5 w-auto opacity-50 md:h-10"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ClientList;
