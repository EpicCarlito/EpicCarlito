import { Link } from "react-router-dom"
import Thinking from "../assets/ThinkingEmoji.svg"

export default function Error() {
    return (
      <div className="h-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4">
          <img src={Thinking} height={100} width={100} className="rounded-full"></img>
          <h1 className="text-center text-[0.75rem] md:text-3xl font-comfortaa">
            Well well, you tried to find a page that doesn't exist
          </h1>
            <Link to="/" className="text-center rounded-md border w-[12rem] h-[2rem] text-xl bg-[#fffff] hover:cursor-pointer hover:-translate-y-1 duration-200">Return Home</Link>
        </div>
      </div>
    )
  }