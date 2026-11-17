"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { clients, testimonials } from "@/content/home";
import BottomWave from "../waves/Bottom";
import TopCurve from "../waves/TopCurve";
import ClientList from "../clientList/ClientList";

const HomePageTestimonials = () => {
  return (
    <section
      id="testimonials-section"
      className="bg-light-custom-gradient pt-[150px] pb-[200px] lg:pb-[300px] dark:bg-dark-custom-gradient"
    >
      <TopCurve style="fill-light-portfolio-background dark:fill-dark-portfolio-background" />

      <div className="testimolials container text-gray-100">
        <h2>Testimonials</h2>
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const delay = (index + 1) * 0.1;
            return (
              <div
                key={testimonial.name}
                className="flex h-full flex-col justify-between gap-10"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay }}
                >
                  {testimonial.quote}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + delay }}
                  className="flex flex-row justify-start gap-5"
                >
                  <div className="w-[75px] grayscale">
                    <Image
                      {...testimonial.picture}
                      alt={testimonial.picture.alt}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="mb-0 max-h-[75px] basis-3/4">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.affiliation}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
        <ClientList clients={clients} />
      </div>
      <BottomWave colour="fill-black" />
    </section>
  );
};

export default HomePageTestimonials;
