"use client"

import { motion } from "motion/react"

export default function About() {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row
      max-w-7xl justify-evenly  mx-auto items-center px-0 md:px-20 xl:px-72 pt-20 md:pt-16 xl:pt-20">
      <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-[18px]">About</h3>
      <motion.img
        initial={{
          x: -200,
          rotate: -350,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          x: 0,
          rotate: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        src="/hackerman.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg
        md:w-54 md:h-85 xl:w-[210px] xl:h-[310px] xl:rounded-md border border-[#28E98C]"
      />
      <motion.div
        initial={{
          x: 200,
          rotate: 360,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          x: 0,
          rotate: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        className="space-y-4 px-5 md:px-10 pt-2">
        <h4 className="text-[16px] font-semibold">
          I may not have been born in the darkness, nor was I molded by it.
        </h4>
        <p className="text-[12px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas, autem alias accusantium non exercitationem sequi corrupti reiciendis dolorum, magni, tempore voluptatum error minima est qui sed molestiae iusto quia.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas, autem alias accusantium non exercitationem sequi corrupti reiciendis dolorum, magni, tempore voluptatum error minima est qui sed molestiae iusto quia.
        </p>
      </motion.div>
    </div>
  )
}
