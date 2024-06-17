import AnimatedWaves from "@/components/animatedWaves";
import ProfileCard from "@/components/profileCard";

export default function Home() {
  return (
    <>
      <div className="h-full">
        <AnimatedWaves />
        <div className="absolute z-[-1] w-screen h-full p-2 md:p-4">
          <div className="h-full bg-zinc-700 max-w-full p-5 md:p-10">
            <ProfileCard />
          </div>
        </div>
      </div>
    </>
  );
}
