"use client"
import { motion } from "motion/react"

export default function Projects() {
  const projects = [1, 2, 3, 4]
  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-[18px]">
        Projects
      </h3>
      <div className="projes flex overflow-y-hidden snap-x snap-mandatory z-20">
        {
          projects.map((val) =>
            <div className="w-full h-screen text-center flex flex-col items-center justify-center key={val} flex-shrink-0 snap-center">
              <motion.img
                initial={{
                  opacity: 0,
                  x: 100
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 1.0
                }}
                viewport={{
                  once: true
                }}
                className="w-60 h:36 sm:w-72 sm:h-36 md:mt-5"
                src="/example_proj.png"
                alt=""
              />
              <motion.div
                initial={{
                  opacity: 0,
                  x: -100
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 1.0
                }}
                viewport={{
                  once: true
                }}
              >
                <h4 className="text-2xl mb-5 md:mb-3">
                  <span className="underline decoration-[#28E98C]">
                    Project {val} of {projects.length}:
                  </span> {" "}
                  Raycaster
                </h4>
                <p className="w-72 text-xs mb-32 sm:mb-0">This was a fun project written in javascript and css, writing a raycaster for an alx task. How fascinating it was fr fr no cap</p>
              </motion.div>
            </div>
          )
        }
      </div>
      <div className="absolute left-0 top-[40%] h-[200px] w-full bg-[#28E98C]/10  -skew-y-12"></div>
    </div>
  )
} 
