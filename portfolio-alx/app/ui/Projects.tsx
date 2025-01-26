import * as motion from "motion/react-client"
import { defineQuery, PortableText } from "next-sanity"
import { sanityFetch, urlFor } from "../lib/sanity"
import EditingScreen from "./EditingScreen"
import ErrorScreen from "./ErrorScreen"

const PROJECTS_QUERY = defineQuery("*[_type == 'project']{title, description, image}")
export default async function Projects() {
  let projects
  try {
    const { data } = await sanityFetch({
      query: PROJECTS_QUERY,
    })
    if (data.length === 0) return <EditingScreen sectionTitle="Projects" />
    projects = data
  } catch {
    return (<ErrorScreen sectionTitle="Projects" />)
  }

  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-[18px]">
        Projects
      </h3>
      <div className="projes flex overflow-y-hidden snap-x snap-mandatory z-20
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#28E98C]/80">
        {
          projects.map((project, idx) =>
            <div className="w-full h-screen text-center flex flex-col items-center justify-center  flex-shrink-0 snap-center" key={idx}>
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
                className="w-60 h:36 sm:w-72 sm:h-36 md:mt-5 border-2 border-[#28E98C]/10"
                src={urlFor(project.image).url()}
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
                    Project {idx + 1} of {projects.length}:
                  </span> {" "}
                  {project.title}
                </h4>

                <div className='px-8' >
                  <PortableText value={project.description} />
                </div>
              </motion.div>
            </div>
          )
        }
      </div>
      <div className="absolute left-0 top-[40%] h-[200px] w-full bg-[#28E98C]/10  -skew-y-12"></div>
    </div>
  )
}
