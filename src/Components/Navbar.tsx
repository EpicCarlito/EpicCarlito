import { Link, useLocation } from "react-router-dom"

export default function NavBar() {
  const location = useLocation();
    return (
        <div>
          {(location.pathname != "/") ? (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-row justify-center gap-[1rem] text-xl">
                {(location.pathname != "/aboutme") ? (
                  <Link to="/aboutme" className="rounded-md border w-[7rem] bg-[#fffff] text-center hover:-translate-y-1 duration-200">About Me</Link>
                ) : (
                  <Link to="/" className="rounded-md border w-[7rem] bg-[#fffff] text-center hover:-translate-y-1 duration-200">Go Back</Link>
                )}
                {(location.pathname != "/projects") ? (
                  <Link to="/projects" className="rounded-md border w-[7rem] bg-[#fffff] text-center hover:-translate-y-1 duration-200">Projects</Link>
                ): (
                  <Link to="/" className="rounded-md border w-[7rem] bg-[#fffff] text-center hover:-translate-y-1 duration-200">Go Back</Link>
                )}
              </div>
            </div>
          ) : (
            <div className="absolute flex flex-row justify-center text-xl gap-[1rem] top-4 left-4 md:left-1/2 transform md:-translate-x-1/2">
              <Link to="/aboutme" className="rounded-md border w-[7rem] bg-[#fffff] text-center hover:-translate-y-1 duration-200">About Me</Link>
              <Link to="/projects" className="rounded-md border w-[7rem] bg-[#fffff] text-center hover:-translate-y-1 duration-200">Projects</Link>
            </div>
          )}
        </div>
    )
  }

  // Adjust div if not on home page