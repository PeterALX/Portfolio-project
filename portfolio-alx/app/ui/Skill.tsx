import * as motion from "motion/react-client"
import { urlFor } from "../lib/sanity"

interface skillProps {
  skill: any
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
      <img
        className='w-[22px] h-[22px]'
        src={urlFor(skill.icon).url()}
        alt="" />
    </motion.div>
  )
}
