import { Link, useLocation } from "react-router-dom"

export default function NavBar() {
  const location = useLocation();
    return (
      <div className="absolute flex flex-row justify-center text-xl gap-[1rem] top-4 left-4 md:left-1/2 transform md:-translate-x-1/2">
        {(location.pathname != "/projects") ? (
        <Link to="/projects" className="rounded-md border w-[7rem] bg-[#fffff] text-center hover:-translate-y-1 duration-200">Projects</Link>
        ) : (
          <Link to="/" className="rounded-md border w-[7rem] bg-[#fffff] text-center hover:-translate-y-1 duration-200">Home</Link>
        )}

        {(location.pathname != "/hobbies") ? (
          <Link to="/hobbies" className="rounded-md border w-[7rem] bg-[#fffff] text-center hover:-translate-y-1 duration-200">Hobbies</Link>
        ): (
          <Link to="/" className="rounded-md border w-[7rem] bg-[#fffff] text-center hover:-translate-y-1 duration-200">Home</Link>
        )} 
      </div>
    )
  }