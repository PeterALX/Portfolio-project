import * as motion from "motion/react-client"
import { defineQuery, PortableText } from "next-sanity"
import { sanityFetch, urlFor } from "../lib/sanity"
import EditingScreen from "./EditingScreen"
import ErrorScreen from "./ErrorScreen"

const ABOUT_QUERY = defineQuery('*[_type=="about"]{title, body, image}')
export default async function About() {
  let aboutMe
  try {
    const { data } = await sanityFetch({
      query: ABOUT_QUERY,
    })
    if (data.length === 0) return <EditingScreen sectionTitle="About" />
    aboutMe = data[0]
  } catch {
    return (<ErrorScreen sectionTitle="About" />)
  }
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row
      max-w-7xl justify-evenly  mx-auto items-center px-0 md:px-20 xl:px-72 pt-20 md:pt-16 xl:pt-20">
      <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-[18px]">About</h3>
      <motion.img
        initial={{
          x: -200,
          rotate: -350,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          x: 0,
          rotate: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        src={urlFor(aboutMe.image).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg
        md:w-54 md:h-85 xl:w-[210px] xl:h-[310px] xl:rounded-md border border-[#28E98C]"
      />
      <motion.div
        initial={{
          x: 200,
          rotate: 360,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          x: 0,
          rotate: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        className="space-y-4 px-5 md:px-10 pt-2">
        <h4 className="text-[16px] font-semibold">
          {aboutMe.title}
        </h4>
        <div className='px-4 md:px-0' >
          <PortableText value={aboutMe.body} />
        </div>
      </motion.div>
    </div>
  )
}
