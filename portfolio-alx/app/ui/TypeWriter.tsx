"use client"
import { Cursor, useTypewriter } from "react-simple-typewriter"

interface t_TypewriterProps {
  words: Array<string>
}
export default function Typewriter({ words }: t_TypewriterProps) {
  const [text] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 2000
  })
  return (
    <h1 className='text-[20px] lg:tex6xl font-semibold '>
      <span className='mr-3'>{text}</span>
      <Cursor cursorColor='#f7ab0a' />
    </h1>
  )
}
