import oldProfile from "../assets/oldEpicCarlito.svg"
import newProfile from "../assets/newEpicCarlito.svg"
import Pattern from "../assets/MainWaves.svg"
import Mobile from "../assets/MobileWaves.svg"
import NavBar from "../Components/Navbar"

export default function Home() {
  return (
    <div className="h-full">
      <NavBar />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
        <div className="flex justify-center items-center gap-[0.5rem] mb-1">
          <img src={oldProfile} height={100} width={100} className="rounded-full"></img>
          <img src={newProfile} height={100} width={100} className="rounded-full "></img>
        </div>
          <div className="flex justify-center items-center gap-1">
            <h1 className="text-3xl font-comfortaa ">
              EpicCarlito
            </h1>
          <p className="flex flex-row-reverse text-sm">he/him</p>
          </div>
        <p className="text-center">Hello, I am EpicCarlito (my online persona)!</p>
      </div>
    <img className="absolute bottom-0 z-[-1] w-full md:hidden" src={Mobile}></img>
    <img className="absolute bottom-0 z-[-1] w-full hidden md:block" src={Pattern}></img>
</div>
  )
}

// Fix with h-[150vw]