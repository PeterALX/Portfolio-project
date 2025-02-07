import * as motion from "motion/react-client"

export default function BackgroundCircles() {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <div className="absolute top-[-580px] border border-[#28E98C] rounded-full h-[400px] w-[400px] mt-52 animate-pulse" />
      <div className="absolute top-[-360px] border border-[#333333] rounded-full h-[900px] w-[900px] mt-52 animate-pulse" />
      <div />
    </motion.div>
  )
}
