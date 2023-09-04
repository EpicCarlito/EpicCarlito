import Profile from "../assets/EpicCarlito.svg"

export default function Home() {
  return (
    <div className="h-screen w-screen">
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <img src={Profile} height={100} width={100} className="rounded-full"></img>
      <div className="flex justify-center items-center gap-1">
        <h1 className="text-3xl font-comfortaa">
          EpicCarlito
        </h1>
        <p className="flex flex-row-reverse text-sm">he/him</p>
      </div>
      <p>Hello, I am EpicCarlito (my online persona)!</p>
    </div>
    </div>
  )
}