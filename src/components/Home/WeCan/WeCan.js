"use client"

import image from "@/constant/Images/image"
import Image from "next/image"
import { useEffect, useState } from "react";

const WeCan = () => {
   const services = [
    {
        name: "Hiperautomação",
        imgUrl: image.hyperautomation,
        bgColour: "bg-green-100"
    },{
        name: "IA e IA Generativa",
        imgUrl: image.ai,
        bgColour: "bg-yellow-100"
    },{
        name: "Desenvolvimento Web",
        imgUrl: image.wd,
        bgColour: "bg-rose-100"
    },{
        name: "Automação de Processos Robóticos (RPA)",
        imgUrl: image.rpa,
        bgColour: "bg-blue-100"
    },{
        name: "Softwares Personalizados",
        imgUrl: image.softwareEnginner,
        bgColour: "bg-pink-100"
    },
   ]

   const [activeSlide, setActiveSlide] = useState(0);

   useEffect(() => {
     const interval = setInterval(() => {
       setActiveSlide((prevState) => (prevState + 1) % services.length);
     }, 2000);
 
     return () => clearInterval(interval);
   }, [services.length]);
  return (
    <section className="py-24 sm:py-32">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-y-8">
    <div className="my-auto md:pr-24">
    <h1 className="primary-heading">O Que Podemos Fazer <br/>Por <span className="highlight">Você?</span></h1>
    <p className="app__text mt-4">Somos perfeitos em fornecer soluções tecnológicas. Temos serviços que podem acelerar seu negócio.</p>
    </div>

    <div className="relative h-[500px] p-0">
     {
        services.map((i,k) => {
            return (
             <div key={k} className={`slide ${i.bgColour} flex justify-end flex-col items-center shadow-lg rounded-xl app__text ${
                activeSlide === k ? "activeSlider" : ""
              }`}>
             <Image src={i.imgUrl} height={400} width={400} alt=""/>
             <div className="py-6 bg-white w-full rounded-xl">
             <h1 className="font-bold text-2xl text-center">{i.name}</h1>
             </div>
             </div>
            )
        })
     }
    </div>
    </div>
    </section>
  )
}

export default WeCan