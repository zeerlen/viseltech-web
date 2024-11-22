"use client"
import { motion } from 'framer-motion'
import image from "@/constant/Images/image";
import Image from "next/image";
import "./ContactAddress.css";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const items = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const ContactAddress = () => {
  return (
    <section className="contact-us-wrapper py-16 md:py-32 bg-slate-50">
      <div className="app__container contact-heading text-center mx-w-700 m-auto pb-50 pb-md-30 get-bottom animate">
        <div className="section-title pb-25 animate">
          <h2 className="text-4xl font-extrabold">Entre em Contato Conosco</h2>
        </div>
      </div>
      <div className="app__container mt-8">
        <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={items}>
            <div className="contact-card common-single-card h4-offer-card paste-hover bg-white flex justify-center items-center flex-col shadow-md">
              <div className="contact-card-icon card-paste svg-paste p-6 drop-shadow-lg">
                <Image src={image.call} alt="call" />
              </div>
              <div className="contact-card-content mt-4">
                <h6 className='font-semibold'>(92) 93618-5959 </h6>
              </div>
            </div>
          </motion.div>
          <motion.div variants={items}>
            <div className="contact-card common-single-card h4-offer-card pink-hover bg-white flex justify-center items-center flex-col shadow-md">
              <div className="contact-card-icon card-pink1 svg-pink1 p-6 drop-shadow-lg">
                <Image src={image.chat} alt="chat" />
              </div>
              <div className="contact-card-content mt-4">
                <h6 className='font-semibold'>contato@visel.tech</h6>
              </div>
            </div>
          </motion.div>
          <motion.div variants={items}>
            <div className="contact-card common-single-card h4-offer-card purple-hover bg-white flex justify-center items-center flex-col shadow-md">
              <div className="contact-card-icon card-purple svg-purple p-6 drop-shadow-lg">
                <Image src={image.placeholder} alt="placeholder" />
              </div>
              <div className="contact-card-content mt-4">
                <h6 className='font-semibold'>
                  Manaus - AM
                  </h6>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactAddress;
