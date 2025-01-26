import { SocialIcon } from "react-social-icons"
import * as motion from "motion/react-client"
import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/sanity";
import Image from 'next/image';
import EditingHeader from "./EditingHeader";
import ErrorHeader from "./ErrorHeader";

const SOCIALS_QUERY = defineQuery(`*[_type == 'social']{title, url}`);
export default async function Header() {
  let socials
  try {
    const { data } = await sanityFetch({
      query: SOCIALS_QUERY,
    })
    if (data.length === 0) return <EditingHeader />
    socials = data
  } catch {
    return (<ErrorHeader />)
  }

  const socialIconStyle = {
    width: "48px",
    height: "48px",
  }
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto xl:items-center p-5 px-0 md:px-32 xl:px-52 z-20" >
      <motion.div
        className="flex flex-row items-center borde"
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
        {
          socials.map((social, idx) =>
            <SocialIcon
              key={idx}
              target="_blank"
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
              style={socialIconStyle}
            />
          )
        }
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
          alt="Envelope Icon"
          width={28}
          height={28}
        />
        <p className="uppercase hidden md:inline-flex md:ml-[10px] text-sm text-gray-400">Get in touch</p>
      </motion.a>
    </header>
  )
}
