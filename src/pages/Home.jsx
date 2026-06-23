import FloatingShape from "../components/ui/FloatingShape";
import useMousePosition from "../hooks/useMousePosition";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";


import MouseGlow from "../components/ui/MouseGlow";

export default function Home() {
    const mouse = useMousePosition();

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#05050a] text-white">


            <MouseGlow x={mouse.x} y={mouse.y} />

            <FloatingShape className="top-[-10%] left-[-10%] h-[28rem] w-[28rem] bg-cyan-500/20" />
            <FloatingShape className="top-[40%] right-[-15%] h-[32rem] w-[32rem] bg-purple-500/20" />
            <FloatingShape className="bottom-[-15%] left-[20%] h-[24rem] w-[24rem] bg-blue-500/15" />
            <Hero />
            <Stats />


        </div>
    );
}