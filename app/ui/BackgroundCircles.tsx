import { motion } from "motion/react"

export default function BackgroundCircles() {
  return (
    <motion.div
      className="relative flex justify-center items-center "
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <div className="absolute border border-[#666666] rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
      <div className="absolute border border-[#28E98C] rounded-full h-[650px] w-[650px] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 " />
      <div />
    </motion.div>
  )
}
