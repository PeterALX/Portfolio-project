import * as motion from "motion/react-client"
import Skill from "./Skill";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/sanity";
import EditingScreen from "./EditingScreen";
import ErrorScreen from "./ErrorScreen";

const SKILLS_QUERY = defineQuery("*[_type == 'technology']{icon, name}")
export default async function Skills() {
  let skills: Array<any>
  try {
    const { data } = await sanityFetch({
      query: SKILLS_QUERY,
    })
    if (data.length === 0) return <EditingScreen sectionTitle="Skills" />
    skills = data
  } catch () {
    return (<ErrorScreen sectionTitle="Skills" />)
  }
  return (
    <div className="relative h-screen  flex flex-col items-center justify-start">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-[18px]">
        Skills
      </h3>
      <div className="grid grid-cols-4 gap-5 gap-y-9 sm:gap-y-5 mt-44 overflow-hidden px-4">
        {
          skills.map((skill, idx) =>
            <Skill key={idx} skill={skill} />
          )
        }
      </div>
      <motion.div
        initial={{
          width: 0,
          height: 1
        }}
        whileInView={{
          width: 270,

        }}
        transition={{
          duration: 1.0
        }}
        className="h-1 border-t-4 mt-8 border-[#666666]/70"
      ></motion.div>
    </div>
  )
}
