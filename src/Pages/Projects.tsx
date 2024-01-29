import { Link } from "react-router-dom"
import lockedIcon from "../assets/Locked.svg"
import typeScript from "../assets/Typescript.svg"
import gitHub from "../assets/githubIcon.svg"
import java from "../assets/javaIcon.svg"
import NavBar from "../Components/Navbar"

export default function Projects() {

  const projects = [
    {
      name: "Atom Bot",
      description: "A discord bot that checks email of students to get verified and a message verification system for allowing visitors!",
      type: "typescript",
      date: "June 2023 - Now"
    },
    {
      name: "EmailChecker",
      description: "A simple way to check if an email exists! Created to be used for the Atom Bot project to check emails",
      github: "https://github.com/EpicCarlito/EmailChecker",
      type: "typescript",
      date: "July 2023 - August 2023"
    },
    {
      name: "The Hops Bot",
      description: "A discord bot that would announce weekly newsletter releases and a nickname system for each user by using a database!",
      type: "typescript",
      date: "October 2022 - May 2023"
    }
  ];

  const language: { [key: string]: string } = {
    typescript: typeScript,
    java: java
  };

  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center h-screen">
        <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2 gap-[1rem]">
          {projects.map((project) => {
          return (
          <div className="flex flex-col gap-[0.25rem] h-[12.5rem] w-[25rem] border rounded-3xl p-4">
            <div className="flex flex-row items-center gap-[0.5rem]">
              <img src={language[project.type]} className="h-[2rem]"></img>
              <h1 className="text-2xl font-semibold">{project.name}</h1>
          </div>
          <div>
            <p>{project.description}</p>
            <p>{project.date}</p>
          </div>
          {project.github ? (   
            <div className="flex flex-row items-center gap-[0.5rem] hover:-translate-y-1 duration-200">
              <Link to={project.github} className="flex flex-row items-center gap-[0.5rem]">
                <img src={gitHub} className="h-[2rem]"></img>
                <div>Source Code</div>
              </Link>
            </div>
          ) : (
            <div className="flex flex-row items-center gap-[0.25rem]">
              <img src={lockedIcon} className="h-[2rem]"></img>
              <p>Private</p>
            </div>
          )}
          </div>
          );
          })}
        </div>
      </div>
    </div>
    )
  }