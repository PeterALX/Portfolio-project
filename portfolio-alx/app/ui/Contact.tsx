import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
export default function Contact() {
  return (
    <div className="relative h-screen flex justify-center items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-[18px] text-center">
        Nivutie Nangos
      </h3>
      <div className="flex flex-col items-center mt-24 px-10" >
        <h4 className="text-center font-semibold space-y-10 mb-4">
          I have got just what you need, <br />
          <span className="decoration-[#28E98C]/70 underline">let's talk</span>
        </h4>
        <div className="flex space-x-2 items-center">
          <PhoneIcon className="h-5 w-5 text-[#28E98C]/70 animate-pulse" />
          <p className="text-sm">+123456789</p>
        </div>
        <div className="flex space-x-2 items-center">
          <EnvelopeIcon className="h-5 w-5 text-[#28E98C]/70 animate-pulse" />
          <p className="text-sm">mail@deez.com</p>
        </div>
        <div className="flex space-x-2 items-center mb-5">
          <MapPinIcon className="h-5 w-5 text-[#28E98C]/70 animate-pulse" />
          <p className="text-sm">123, basedTown</p>
        </div>
        <form className="flex flex-col space-y-2" action="">
          <div className="flex space-x-2 ">
            <input placeholder="Name" className="contactInput w-[50%]" type="text" />
            <input placeholder="Email" className="contactInput w-[50%]" type="email" />
          </div>
          <input placeholder="Subject" className="contactInput" type="text" />
          <textarea placeholder="Message" className="contactInput" />
          <button type="submit" className="bg-[#28E98C] rounded-md text-black px-2 py-[8px] font-semibold">Submit</button>
        </form>
      </div>
    </div>
  )
}
