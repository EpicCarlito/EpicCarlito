import Image from 'next/image'
import Link from 'next/link'
import EpicCarlito from "../../public/epiccarlito.svg"
import discord from "../../public/social/discord.svg"
import instagram from "../../public/social/instagram.svg"
import github from "../../public/social/github.svg"

export default function Home() {
 return (
  <div className="h-full">
    <div className="flex flex-row justify-center absolute top-3 right-3 gap-[0.5rem]">
      <Link href="https://discord.com/users/546133861751586816"><Image src={discord} alt="" height={35} width={35} className="hover:-translate-y-1 duration-200"></Image></Link>
      <Link href="https://www.instagram.com/epiccarlito"><Image src={instagram} alt="" height={35} width={35} className="hover:-translate-y-1 duration-200"></Image></Link>
      <Link href="https://github.com/EpicCarlito"><Image src={github} alt="" height={35} width={35} className="hover:-translate-y-1 duration-200"></Image></Link>
    </div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
      <div className="flex justify-center items-center gap-[0.5rem] mb-1">
        <Image src={EpicCarlito} alt="" height={100} width={100} className="rounded-full"></Image>
      </div>
      <p className="text-sm">(PFPs created by L.)</p>
        <div className="flex justify-center items-center gap-1">
          <h1 className="text-3xl font-comfortaa ">
            EpicCarlito
          </h1>
        <p className="flex flex-row-reverse text-sm">he/him</p>
        </div>
        <div className="text-center">
        <p>{`Hello, I am James (BxSci '27)`}</p>
        <p>Student, Programmer and Graphic Designer</p>
        <p>Personality types: <a href="https://www.16personalities.com/esfj-personality" className="underline decoration-2 decoration-[#ffd769] hover:decoration-sky-500">ESFJ-A</a> / <a href="https://www.16personalities.com/isfj-personality" className="underline decoration-2 decoration-[#ffd769] hover:decoration-sky-500">ISFJ-T</a>.</p>
      </div>
    </div>
  </div>
 )
}