import Profile from "../assets/EpicCarlito.svg"
import Pattern from "../assets/MainPattern.svg"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-slate-50">
      <img src={Profile} height={100} width={100} className="rounded-full"></img>
      <div className="flex justify-center items-center gap-1">
        <h1 className="text-3xl font-comfortaa">
          EpicCarlito
        </h1>
        <p className="flex flex-row-reverse text-sm">he/him</p>
      </div>
      <p>Hello, I am EpicCarlito (my online persona)!</p>
      <img className="absolute bottom-0 z-[1] w-full bg-red-700" src={Pattern}></img>
    </div>
  )
}