import * as motion from "motion/react-client"
import Image from 'next/image';

export default function ErrorHeader() {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto xl:items-center p-5 px-0 md:px-32 xl:px-52 z-20" >
      <motion.div
        className="flex flex-row items-center p-[10px]"
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
        <Image
          src="/lownet.svg"
          alt="connection Error"
          className=''
          width={28}
          height={28}
        />
      </motion.div>
      <motion.a
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
        href="#contact"
        className="flex items-center p-[10px]"
      >
        <Image
          src="/mail.svg"
          alt="Envelope icon"
          width={28}
          height={28}
        />
        <p className="uppercase hidden md:inline-flex md:ml-[10px] text-sm text-gray-400">Get in touch</p>
      </motion.a>
    </header>
  )
}
