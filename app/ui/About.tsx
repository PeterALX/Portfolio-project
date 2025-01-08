"use client"

import { motion } from "motion/react"

export default function About() {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row
      max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.img
        initial={{
          x: -500,
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
        md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] xl:rounded-md border border-[#28E98C]"
      />
      <motion.div
        initial={{
          x: 500,
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
        className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          I may not have been born in the darkness, nor was I molded by it.
        </h4>
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas, autem alias accusantium non exercitationem sequi corrupti reiciendis dolorum, magni, tempore voluptatum error minima est qui sed molestiae iusto quia.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas, autem alias accusantium non exercitationem sequi corrupti reiciendis dolorum, magni, tempore voluptatum error minima est qui sed molestiae iusto quia.
          Ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas, autem alias accusantium non exercitationem sequi corrupti reiciendis dolorum, magni, tempore voluptatum error minima est qui sed molestiae iusto quia.
        </p>
      </motion.div>
    </div>
  )
}
