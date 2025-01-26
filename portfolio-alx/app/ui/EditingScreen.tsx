"use client"
import Image from 'next/image';
import { useTypewriter } from 'react-simple-typewriter';

interface constructionScreenProps {
  sectionTitle?: string
}
export default function ConstructionScreen({ sectionTitle }: constructionScreenProps) {
  const [text] = useTypewriter({
    words: ['...'],
    loop: true,
    delaySpeed: 500
  })
  return (
    <div className='relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden px-10' >
      {sectionTitle &&
        <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-[18px]">{sectionTitle}</h3>
      }
      <Image
        src="/editing.svg"
        alt="Screenshots of the dashboard project showing desktop version"
        className=''
        width={90}
        height={90}
      />
      <h2 className='md:text-xs uppercase text-[#28E98C]  tracking-[15px] font-semibold'>
        New intel incoming
      </h2>
      <div className='border-2 rounded-[5px] p-5 border-[#28E98C]/20'>
        <p className='text-gray-400 text-[16px] pb-2'>
          Standby<span className='ml-1'>{text}</span> <br />
          I am making some live edits <br />
          Hello from the other side of the wire btw haha 👋👋<br />
        </p>
      </div>
    </div>
  )
}
