"use client"
import { motion } from "motion/react"
import Image from "next/image"

export default function ExperienceCard() {
  const iconSize = 15
  return (
    <article className="flex flex-col sm:flex-row justify-evenly items-center rounded-lg space-y-3 flex-shrink-0
      w-full md:w-[600px] xl:w-[610px] snap-center bg-[#292929] p-0  hover:opacity-100  py-[10px] pt-[24px] my-10 mt-20">
      <div className="border-b sm:border-r border-[#666666] flex flex-col items-center sm:items-start sm:pr-20 sm:border-b-0" >
        <motion.img
          initial={{
            y: -10,
            opacity: 0
          }}
          transition={{ duration: 1.2 }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="w-[72px] h-[72px] rounded-full xl:w-24 xl:h-24 object-cover object-center"
          src="/hackerman.jpg"
          alt=''
        />
        <div className='px-0 md:px-0 flex flex-col items-center sm:items-start' >
          <h4 className="text-[18px] font-light mt-5">CEO of WamlambezCorp</h4>
          <p className="font-light text-[12px] mt-1">Cracked devs</p>
          <div className="flex space-x-2 my-3 ">
            <Image
              src="/graphql.svg"
              alt=""
              width={iconSize}
              height={iconSize}
              className='rounded-full '
            />
            <Image
              src="/graphql.svg"
              alt=""
              width={iconSize}
              height={iconSize}
              className='rounded-full'
            />
            <Image
              src="/graphql.svg"
              alt=""
              width={iconSize}
              height={iconSize}
              className='rounded-full'
            />
          </div>
          <p className="uppercase text-[12px] pb-3 text-gray-300">Started work ... - Ended ...</p>
        </div>
      </div>
      <ul className="list-disc text-[12px] space-y-2 marker:text-[#666666] text-[#eddddd]">
        <li>Summary work</li>
        <li>Summary work</li>
        <li>Summary work</li>
        <li>Summary work</li>
        <li>Summary work</li>
      </ul>

    </article>
  )
}
