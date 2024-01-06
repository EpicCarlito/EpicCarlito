import Construction from "../assets/ConstructionEmoji.svg"
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();

    return (
      <div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4">
          <img src={Construction} height={100} width={100}></img>
          <h1 className="text-center text-2xl md:text-3xl font-comfortaa md:w-[36rem] w-[24rem]">
            HEY! These is construction going on, please be safe and go back!
          </h1>
          <button onClick={() => navigate(-1)} className="text-center rounded-lg border w-[12rem] h-[2rem] text-xl bg-[#fffff] hover:cursor-pointer hover:-translate-y-1 duration-200">Go Back</button>
        </div>
      </div>
    )
  }