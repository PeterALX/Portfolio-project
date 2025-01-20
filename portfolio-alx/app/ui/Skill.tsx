"use client"
import { motion } from "motion/react"

export default function Skill() {
  return (
    <div className="">
      <motion.img
        initial={{
          rotate: 360,
          y: -20,
          opacity: 0
        }}
        whileInView={{
          rotate: 0,
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.2
        }}
        className='w-[42px] h-[42px]'
        src="/graphql.svg"
        alt="" />
    </div>
  )
}
