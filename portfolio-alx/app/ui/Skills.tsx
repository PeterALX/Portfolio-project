"use client"
import { motion } from "motion/react";
import Skill from "./Skill";

export default function Skills() {
  return (
    <div className="relative h-screen  flex flex-col items-center justify-start">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-[18px]">
        Skills
      </h3>
      <div className="grid grid-cols-4 gap-5 gap-y-9 sm:gap-y-5 mt-44 overflow-hidden px-4">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />

      </div>
      <motion.div
        initial={{
          width: 0,
          height: 1
        }}
        whileInView={{
          width: 270,

        }}
        transition={{
          duration: 1.0
        }}
        className="h-1 border-t-4 mt-8 border-[#666666]/70"
      ></motion.div>
    </div>
  )
}
