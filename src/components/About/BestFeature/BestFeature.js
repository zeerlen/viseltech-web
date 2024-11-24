'use client'
import { motion } from 'framer-motion'
import image from "@/constant/Images/image"
import { ComputerDesktopIcon } from "@heroicons/react/20/solid"
import { ArrowPathIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

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
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const BestFeature = () => {
    const feature = [{
        name: "IA e IA Generativa",
        description: "Desenvolvemos agentes inteligentes que podem aprender, raciocinar e tomar decisões cruciais para o seu negócio.",
        icon: ArrowTrendingUpIcon
    },{
        name: "Automação de Processos Robóticos (RPA)",
        description: "Realizamos mapeando processos, desenvolvemos e orquestramos RPAs para sua comodidade empresarial.",
        icon: ArrowPathIcon
    },{
        name: "Hiperautomação",
        description: "Ajudamos a sua empresa a automatizar processos de negócios complexos, combinando IA, RPA e outras tecnologias para aumentar a eficiência e a produtividade.",
        icon: ComputerDesktopIcon
    },]
  return (
    <div>
      <div className="app__container py-16 sm:py-32">    
      <div className="grid grid-cols-1 lg:grid-cols-2">
      <motion.div variants={variants} initial="hidden" whileInView="show" className="my-auto">
      <h1 className="primary-heading mb-8">Nossas Melhores <span className="highlight">Soluções</span></h1>
       {
        feature.map((i,k) => {
            return (
                <motion.div variants={items} key={k} className="flex gap-4 my-6 shadow-lg py-10 px-6">
                <div className="flex h-16 w-16 mb-4 items-center justify-center rounded-full bg-white">
                <div className="absolute half-circle rounded-full animate-[spin_3s_linear_infinite] z-1">
                <div className="half-circle-child rounded-full"></div>
                </div>
                </div>
                <div className="flex-1">
                <h1 className="text-xl font-bold mb-4">{i.name}</h1>
                <p className='app__text'>{i.description}</p>
                </div>
                </motion.div>
            )
        })
       }
      </motion.div>
      <div className="my-auto mx-auto">
      <Image src={image.engaging} alt="about"/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default BestFeature