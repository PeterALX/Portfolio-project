import ExperienceCard from "./ExperienceCard"
import EditingScreen from "./EditingScreen"
import ErrorScreen from "./ErrorScreen"
import { defineQuery } from "next-sanity"
import { sanityFetch } from "../lib/sanity"


const EXPERIENCE_QUERY = defineQuery(
  `*[_type == 'experience']{
  jobTitle,
    companyName,
    companyImage,
    workSummary,
    startYear,
    endYear,
  "technologies":technologies[]->{name, icon}
}`
)
export default async function Experience() {
  let experiences
  try {
    const { data } = await sanityFetch({
      query: EXPERIENCE_QUERY,
    })
    if (data.length === 0) return <EditingScreen sectionTitle="Experience" />
    experiences = data
  } catch {
    return (<ErrorScreen sectionTitle="Experience" />)
  }
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-[18px]">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll px-10 snap-x snap-mandatory 
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#28E98C]/80">
        {
          experiences.map((experience, idx) =>
            <ExperienceCard key={idx} experience={experience} />
          )
        }
      </div>
    </div>
  )
}
