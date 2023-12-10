import { Link } from "react-router-dom"

export default function NavBar() {
    return (
      <div className="absolute flex flex-row justify-center text-xl gap-[1rem] top-4 left-4 md:left-1/2 transform md:-translate-x-1/2">
        <Link to="/projects" className="rounded-md border w-[7rem] bg-[#fffff] text-center hover:-translate-y-1 duration-200">Projects</Link>
        <Link to="/hobbies" className="rounded-md border w-[7rem] bg-[#fffff] text-center hover:-translate-y-1 duration-200">Hobbies</Link>  
      </div>
    )
  }