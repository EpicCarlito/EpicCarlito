import { Link } from "react-router-dom"
import lockedIcon from "../assets/Locked.svg"
import typeScript from "../assets/Typescript.svg"
import gitHub from "../assets/githubIcon.svg"
import java from "../assets/javaIcon.svg"
import NavBar from "../Components/Navbar"

export default function Projects() {

  const projects = [
    {
      name: "SBSDB",
      description: "A discord bot that checks email of students to get verified and a messaging system of allowing visitors!",
      type: "typescript",
      date: "June 2023 - Now"
    },
    {
      name: "EmailChecker",
      description: "A simple way to check if an email exists!",
      github: "https://github.com/EpicCarlito/EmailChecker",
      type: "typescript",
      date: "July 2023 - August 2023"
    },
    {
      name: "The Hops Bot",
      description: "A discord bot that would announce weekly newsletter releases and had a nickname system for each user by using a database!",
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
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2 gap-[1rem]">
          {projects.map((project) => {
          return (
          <div className="h-[10.5rem] w-[25rem] border rounded-3xl flex flex-col p-4">
            <div className="flex flex-row gap-[0.5rem]">
              <img src={language[project.type]} className="h-[2rem]"></img>
              <h1 className="text-xl">{project.name}</h1>
          </div>
          <p>{project.description}</p>
          {project.github ? (
            <Link to={project.github} className="flex flex-row items-center gap-[0.5rem] hover:-translate-y-1 duration-200">
              <img src={gitHub} className="h-[2rem]"></img>
              <div>Source Code</div>
            </Link>
          ) : (
            <div className="flex flex-row items-center gap-[0.5rem]">
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

  // return (
  //   <div>
  //     <NavBar />
  //     <div className="h-full">
  //       <div className="flex flex-col items-center justify-center h-screen">
	// 			<div className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem]">
	// 				{projects.map((project) => {
	// 					return (
	// 							<div className={`px-6 py-4 border rounded-3xl`}>
	// 									<h1 className={`text-2xl md:text-3xl`}>
	// 										{project.name}
	// 									</h1>
	// 									<p className="mb-4">
  //                   {project.description}
	// 									</p>
  //                   <div className="flex items-center">
  //                   <img src={language[project.type]} height={75} width={75} className=""></img>
  //                 {project.github ? (
  //                 <Link to={project.github}>
  //                   <div className="flex items-center gap-1 hover:-translate-y-1 duration-200 ml-3">
  //                   <img src={GitHub} height={50} width={50}></img>
  //                   <div>Source Code: Github</div>
  //                   </div>
  //                 </Link>    
  //               ) : (
  //                 <div className="flex items-center gap-1">
  //                 <img src={Locked} height={50} width={50} className=""></img>
  //                 <div>Source Code: Private</div>
  //                 </div>
  //               )}
  //               </div>
	// 							</div>
	// 					);
	// 				})}
	// 			</div>
	// 		</div>
  //     </div>
  //     </div>
  //   )

        // <div className="h-full">
      //   <div className="flex flex-col items-center justify-center h-screen gap-4">
      //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      //     {projects.map((project) => {
			// 			return (              
      //         <div className="rounded-md border bg-[#fffff] w-[85vw] h-[30vw] lg:w-[35vw] lg:h-[20vw] px-6 py-4">
      //           <h1 className="text-2xl md:text-3xl">{project.name}</h1>
      //           <p>{project.description}</p>
      //           <img src={language[project.type]} height={75} width={75} className=""></img>
      //           {project.github ? (
      //             <Link to={project.github}>
      //               <div className="flex items-center gap-1 hover:cursor-pointer hover:-translate-y-1 duration-200">
      //               <img src={GitHub} height={50} width={50}></img>
      //               <div>Source: Github</div>
      //               </div>
      //             </Link>    
      //           ) : (
      //             <div className="flex items-center gap-1">
      //             <img src={Locked} height={50} width={50} className=""></img>
      //             <div>Private</div>
      //             </div>
      //           )}
      //         </div>
			// 			);
			// 		})}
      //     </div>
      //   </div>
      // </div>