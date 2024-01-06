import epicCarlito from "../assets/newEpicCarlito.svg"
import NavBar from "../Components/Navbar"

export default function Error() {

    return (
      <div>
        <NavBar />
        <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
        <img src={epicCarlito} height={100} width={100} className="rounded-full"></img>
        <p className="mt-[1rem]">Hello, down below are things about me!</p>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h1 className="text-center text-[6vw] md:text-[3vw]">Likes:</h1>
            <ul className="text-center text-[3vw] md:text-[1.5vw]">
              <li>Programming</li>
              <li>Tech</li>
              <li>Lofi Hip Hop</li>
              <li>Funk Music</li>
              <li>Dogs & Cats</li>
            </ul>
          </div>
          <div className="mt-[1rem] h-[28vw] md:h-[15vw] w-[1px] bg-[#f3f1f2] mx-[1rem] md:mx-[2rem]"></div>
          <div className="flex flex-col">
            <h1 className="text-center text-[6vw] md:text-[3vw]">Dislikes:</h1>
            <ul className="text-center text-[3vw] md:text-[1.5vw]">
              <li>m o n d a y s</li>
              <li>egotistical people</li>
              <li>bugs (in code)</li>
            </ul>
          </div>
          <div className="mt-[1rem] h-[28vw] md:h-[15vw] w-[1px] bg-[#f3f1f2] mx-[1rem] md:mx-[2rem]"></div>
          <div className="flex flex-col">
            <h1 className="text-center text-[6vw] md:text-[3vw]">Hobbies:</h1>
            <ul className="text-center text-[3vw] md:text-[1.5vw]">
              <li>Programming</li>
              <li>Chess</li>
              <li>Graphic Design</li>
              <li>Reading</li>
              <li>Exercise</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    )
  }