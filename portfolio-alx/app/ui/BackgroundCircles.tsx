import * as motion from "motion/react-client"

export default function BackgroundCircles() {
  return (
    <motion.div
      className="relative flex justify-center items-center"
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
      <div className="absolute border border-[#666666] rounded-full h-[250px] w-[250px] mt-52 animate-ping" />
      <div className="absolute border border-[#666666] rounded-full h-[450px] w-[450px] mt-52 animate-ping" />
      <div className="absolute border border-[#28E98C] rounded-full h-[450px] w-[450px] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[600px] w-[600px] mt-52 " />
      <div />
    </motion.div>
  )
}
