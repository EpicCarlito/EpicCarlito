import { useState, useEffect } from 'react';
import oldProfile from "../assets/oldEpicCarlito.svg"
import santaProfile from "../assets/santaEpicCarlito.svg"
import newProfile from "../assets/newEpicCarlito.svg"
import discordIcon from "../assets/discordIcon.svg"
import instagramIcon from "../assets/instagramIcon.svg"
import githubIcon from "../assets/githubIcon.svg"
import NavBar from "../Components/Navbar"
import AnimatedWaves from "../Components/animatedWaves"

export default function Home() {
 const [isLoading, setIsLoading] = useState(true);
 const [text, setText] = useState('Loading.');
 const textArray = ["Loading.", "Loading..", "Loading..."];
 let currentTextIndex = 0;

 useEffect(() => {
  const interval = setInterval(() => {
    currentTextIndex = (currentTextIndex + 1) % textArray.length;
    setText(textArray[currentTextIndex]);
  }, 1000);

  return () => clearInterval(interval);
 }, []);

 useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 0);

  return () => clearTimeout(timer);
 }, []);

 if (isLoading) {
  return (
    <div className='h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-1'> 
    <div className='text-3xl'>{text}</div>
      <div className="animate-spin">
        <img src={santaProfile} height={100} width={100} className="rounded-full"></img>
      </div> 
    </div>
  )
 }

 return (
  <div className="h-full">
    <NavBar />
    <AnimatedWaves />
    <div className="flex flex-row justify-center absolute top-3 right-3 gap-[0.5rem]">
      <a href="https://discord.com/users/546133861751586816"><img src={discordIcon} className="hover:-translate-y-1 duration-200 h-[7vw] w-full md:h-[5vw] md:w-full lg:h-[3vw] lg:w-full"></img></a>
      <a href="https://www.instagram.com/epiccarlito"><img src={instagramIcon} className="hover:-translate-y-1 duration-200 h-[7vw] w-full md:h-[5vw] md:w-full lg:h-[3vw] lg:w-full"></img></a>
      <a href="https://github.com/EpicCarlito"><img src={githubIcon} className="hover:-translate-y-1 duration-200 h-[7vw] w-full md:h-[5vw] md:w-full lg:h-[3vw] lg:w-full"></img></a>
    </div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center h-[20rem] gap-1">
      <div className="flex justify-center items-center gap-[0.5rem] mb-1">
        <img src={oldProfile} height={100} width={100} className="rounded-full h-[15vw] w-full md:h-[7vw] md:w-full"></img>
        <img src={santaProfile} height={100} width={100} className="rounded-full h-[15vw] w-full md:h-[7vw] md:w-full"></img>
        <img src={newProfile} height={100} width={100} className="rounded-full h-[15vw] w-full md:h-[7vw] md:w-full"></img>
      </div>
      <p className="text-[3vw] md:text-[1.1vw]">(PFPs created by L.)</p>
        <div className="flex justify-center items-center h-[2.75vw] md:h-[2vw] gap-1">
          <h1 className="text-[8vw] md:text-[2.5vw] font-comfortaa">
            EpicCarlito
          </h1>
        <p className="flex flex-row-reverse text-[4vw] md:text-[1vw]">he/him</p>
        </div>
        <div className="text-center text-[3vw] md:text-[1.5vw]">
          <p>Hello, I am James (BxSci '27)</p>
          <p>Student, Programmer and Graphic Designer</p>
          <p>Personality types: <a href="https://www.16personalities.com/esfj-personality" className="underline decoration-2 decoration-[#ffd769] hover:decoration-sky-500">ESFJ-A</a> / <a href="https://www.16personalities.com/isfj-personality" className="underline decoration-2 decoration-[#ffd769] hover:decoration-sky-500">ISFJ-T</a>.</p>
      </div>
    </div>
  </div>
 )
}