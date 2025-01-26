import Image from 'next/image';
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link';
import { defineQuery } from 'next-sanity';
import Typewriter from './TypeWriter';
import ErrorScreen from './ErrorScreen';
import EditingScreen from './EditingScreen';
import { sanityFetch, urlFor } from '../lib/sanity';

const HERO_QUERY = defineQuery('*[_type=="personalHero"]{title, greeting, image}')
export default async function Hero() {
  let heroData: any

  try {
    const { data } = await sanityFetch({
      query: HERO_QUERY,
    })
    if (data.length === 0) return <EditingScreen />
    heroData = data[0]
  } catch (error) {
    return (<ErrorScreen />)
  }

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden' >
      <BackgroundCircles />
      <Image
        src={urlFor(heroData.image).url()}
        alt="Screenshots of the dashboard project showing desktop version"
        className='rounded-full mb-10'
        width={70}
        height={70}
      />
      <div className='z-20 flex flex-col items-center justify-center' >
        <h2 className='md:text-xs uppercase text-gray-500 pb-2 tracking-[15px]'>{heroData.title}</h2>
        <Typewriter words={heroData.greeting} />
        <div>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
