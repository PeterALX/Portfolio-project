"use client"
import Image from 'next/image';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link';
export default function Hero() {
  const [text] = useTypewriter({
    words: [
      'I am Peter',
      'Coding enjoyer',
      'Tinkerer',
      'The year of building is upon us'
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden' >
      <BackgroundCircles />
      <Image
        src="/profile_img.png"
        alt="Screenshots of the dashboard project showing desktop version"
        width={70}
        height={70}
        className='rounded-full mb-10'
      />
      <div className='z-20 flex flex-col items-center justify-center' >
        <h2 className='md:text-xs uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-2xl lg:tex6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>

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
