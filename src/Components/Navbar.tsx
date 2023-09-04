import { Link } from "react-router-dom"

export default function NavBar() {
    return (
      <div className="flex flex-row justify-center absolute text-xl gap-[1rem] w-screen mx-auto mt-[1rem]">
        <Link to="/projects" className="rounded-md border w-[7rem] bg-[#fffff] text-center hover:cursor-pointer hover:-translate-y-1 duration-200">Projects</Link>
        <Link to="/hobbies" className="rounded-md border w-[7rem] bg-[#fffff] text-center hover:cursor-pointer hover:-translate-y-1 duration-200">Hobbies</Link>  
      </div>
    )
  }