'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { MEMBERS } from '@/components/About/Team/Members'
import Image from 'next/image';
import './AboutWorking.css'

const animateVariants = {
    offscreen: {
        opacity: 0.3,
        scale: 0.8,
        y: 50
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 0.8
        }
    }
}


const Team = ({data}) => {
  return (
    <section className="about-working-process">
    <div className="app__container">
        <div className="grid grid-cols-1">
            <div>
                <div className="text-center about-padding">
                    <div className="section-sub-title">
                        <h4 className="text-lg pb-4 font-normal capitalize">Saiba mais sobre nós</h4>
                    </div>
                    <div className="primary-heading">
                        <h2>Nosso <span className="highlight">processo</span> de trabalho</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid gap-10 py-10  row-gap-8 mx-auto sm:row-gap-10 w-full px-2 lg:max-w-screen sm:grid-cols-2 lg:grid-cols-4">
                        
            { 
                data?
                data.map(item=>(
                    <motion.div 
                    variants={animateVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once:true,amount: 0.8}}
                        
                    
                    className="flex">
                        <img
                            className="object-cover w-16 h-16 md:w-20 md:h-20 mr-4 rounded-full shadow ring-1 bg-gray-700 dark:bg-gray-300"
                            src={item.image}
                            alt="Person"
                        />
                        <div className="flex flex-col gap-1 justify-center">
                            <p className="text-md">{item.name}</p>
                            <p className="text-sm text-gray-800 dark:text-gray-300">{item.role}</p>
                        </div>
                    </motion.div>
                    ))
                :
                MEMBERS.map((item, index) => (
                    <motion.div 
                        key={index}
                        variants={animateVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        className="flex"
                    >
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="object-cover w-16 h-16 md:w-20 md:h-20 mr-4 rounded-full shadow ring-1 bg-gray-700 dark:bg-gray-300"
                        />
                        <div className="flex flex-col gap-1 justify-center">
                            <p className="text-md">{item.name}</p>
                            <p className="text-sm text-gray-800 dark:text-gray-300">{item.role}</p>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    </div>
</section> 
  )
}

export default Team