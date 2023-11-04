import Profile from "../assets/EpicCarlito.svg"
import Pattern from "../assets/MainWaves.svg"
import Mobile from "../assets/MobileWaves.svg"
import NavBar from "../Components/Navbar"

export default function Home() {
  return (
    <div className="h-screen">
      <NavBar />
    <div className="h-screen m-full flex flex-col items-center justify-center md:h-screen gap-4"> 
        <img src={Profile} height={100} width={100} className="rounded-full"></img>
        <div className="flex justify-center items-center gap-1">
            <h1 className="text-3xl font-comfortaa">
                EpicCarlito
            </h1>
            <p className="flex flex-row-reverse text-sm">he/him</p>
        </div>
        <p>Hello, I am EpicCarlito (my online persona)!</p>
    </div>
    <img className="absolute bottom-0 z-[-1] w-full md:hidden" src={Mobile}></img>
    <img className="absolute bottom-0 z-[-1] w-full hidden md:block" src={Pattern}></img>
</div>
  )
}

// Fix with h-[150vw]