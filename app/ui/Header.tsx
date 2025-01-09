"use client"
import { SocialIcon } from "react-social-icons"
import { motion } from "motion/react"

export default function Header() {
  const socialIconStyle = {
    width: "48px",
    height: "48px",
  }
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto xl:items-center p-5 px-0 md:px-32 xl:px-52" >
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1
        }}
      >
        <SocialIcon
          url="www.github.com"
          fgColor="gray"
          bgColor="transparent"
          style={socialIconStyle}
        />
        <SocialIcon
          url="www.twitter.com"
          fgColor="gray"
          bgColor="transparent"
          style={socialIconStyle}
        />
        <SocialIcon
          url="www.upwork.com"
          fgColor="gray"
          bgColor="transparent"
          style={socialIconStyle}
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1
        }}
      >
        <SocialIcon
          network="email"
          fgColor="gray"
          bgColor="transparent"
          style={socialIconStyle}
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
      </motion.div>
    </header>
  )
}
