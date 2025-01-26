import Image from 'next/image';

interface errorScreenProps {
  sectionTitle?: string
}
export default function ErrorScreen({ sectionTitle }: errorScreenProps) {
  return (
    <div className='relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden px-10' >
      {sectionTitle &&
        <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-[18px]">{sectionTitle}</h3>
      }
      <Image
        src="/lownetBig.svg"
        alt="Screenshots of the dashboard project showing desktop version"
        className=''
        width={90}
        height={90}
      />
      <h2 className='md:text-xs uppercase text-red-500  tracking-[15px] font-semibold'>
        Error fetching data
      </h2>
      <div className='border-2 rounded-[5px] p-5 border-red-500/20'>
        <p className='text-gray-400 text-[16px] pb-2'>
          Please check your internet and try again. <br />
          If this page is still here, It must be problem on my end.<br />
          I shall fix it as soon as possible.<br />
        </p>
      </div>
    </div>
  )
}
