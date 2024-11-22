"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import image from "@/constant/Images/image";

const services = [
  {
    heading: "IA e IA Generativa",
    imgUrl: image.ai,
    hoverColor: "rgba(255, 182, 193, 0.6)",
  },
  {
    heading: "Automação de Processos Robóticos (RPA)",
    imgUrl: image.rpa,
    hoverColor: "rgba(173, 216, 230, 0.6)",
  },
  {
    heading: "Hiperautomação",
    imgUrl: image.hyperautomation,
    hoverColor: "rgba(255, 255, 102, 0.6)",
  },
];

const CaseStudy = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: (hoverColor) => ({
      scale: 1.05,
      backgroundColor: hoverColor,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="app__container flex flex-col gap-8">
        <div className="text-center">
          <h1 className="primary-heading">
            Alguma dúvida? Basta <br />
            dar uma olhada em <span className="highlight">nossos serviços.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, key) => (
            <motion.div
              key={key}
              className="relative flex flex-col items-center p-6 rounded-lg shadow-lg bg-white transition-all duration-300 sm:min-h-[300px]"
              variants={variants}
              initial="hidden"
              whileInView="show"
              whileHover="hover"
              custom={service.hoverColor}
            >
              <div className=" mx-auto m-auto w-40 h-40 sm:w-36 sm:h-36 mb-5">
                <Image
                  src={service.imgUrl}
                  alt={service.heading}
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center">
                {service.heading}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
