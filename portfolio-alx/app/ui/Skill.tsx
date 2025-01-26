import * as motion from "motion/react-client"
import { urlFor } from "../lib/sanity"
import { SKILLS_QUERYResult } from "@/sanity.types"
import Image from 'next/image';

interface skillProps {
  skill: SKILLS_QUERYResult[number]
}
export default function Skill({ skill }: skillProps) {
  return (
    <motion.div
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
      className="flex items-center justify-center w-[42px] h-[42px] border border-[#666666]/70 rounded-full"
    >
      <Image
        src={urlFor(skill.icon).url()}
        alt="coding technology icon"
        className=''
        width={24}
        height={24}
      />
    </motion.div>
  )
}
