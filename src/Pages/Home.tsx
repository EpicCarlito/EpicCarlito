import oldProfile from "../assets/oldEpicCarlito.svg"
import santaProfile from "../assets/santaEpicCarlito.svg"
import newProfile from "../assets/newEpicCarlito.svg"
import discordIcon from "../assets/discordIcon.svg"
import instagramIcon from "../assets/instagramIcon.svg"
import githubIcon from "../assets/githubIcon.svg"
import NavBar from "../Components/Navbar"
import AnimatedWaves from "../Components/animatedWaves"


export default function Home() {
  return (
    <div className="h-full">
      <NavBar />
      <AnimatedWaves />
      <div className="flex flex-row justify-center absolute top-3 right-3 gap-[0.5rem]">
        <a href="https://discord.com/users/546133861751586816"><img src={discordIcon} height={35} width={35} className="hover:-translate-y-1 duration-200"></img></a>
        <a href="https://www.instagram.com/epiccarlito"><img src={instagramIcon} height={35} width={35} className="hover:-translate-y-1 duration-200"></img></a>
        <a href="https://github.com/EpicCarlito"><img src={githubIcon} height={35} width={35} className="hover:-translate-y-1 duration-200"></img></a>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
        <div className="flex justify-center items-center gap-[0.5rem] mb-1">
          <img src={oldProfile} height={100} width={100} className="rounded-full"></img>
          <img src={santaProfile} height={100} width={100} className="rounded-full"></img>
          <img src={newProfile} height={100} width={100} className="rounded-full "></img>
        </div>
        <p className="text-sm">(PFPs created by L.)</p>
          <div className="flex justify-center items-center gap-1">
            <h1 className="text-3xl font-comfortaa ">
              EpicCarlito
            </h1>
          <p className="flex flex-row-reverse text-sm">he/him</p>
          </div>
          <div className="text-center">
          <p>Hello, I am James</p>
          <p>I code with typescript, so now you know (<a href="https://www.16personalities.com/esfj-personality" className="underline decoration-2 decoration-[#ffd769] hover:decoration-sky-500">ESFJ-A</a> / <a href="https://www.16personalities.com/isfj-personality" className="underline decoration-2 decoration-[#ffd769] hover:decoration-sky-500">ISFJ-T</a>).</p>
        </div>
      </div>
    </div>
  )
}

// Fix with h-[150vw]