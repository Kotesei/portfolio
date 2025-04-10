import { useRef, useEffect } from "react";
import img from "../assets/gb.jpg";
import TechStack from "./TechStack";

const projectSlides = [
  { id: 1, color: "bg-red-500", text: "Slide 1" },
  { id: 2, color: "bg-blue-500", text: "Slide 2" },
  { id: 3, color: "bg-green-500", text: "Slide 3" },
  { id: 4, color: "bg-yellow-500", text: "Slide 4" },
];

export default function Header() {
  const containerRef = useRef();
  useEffect(() => {
    const el = containerRef.current;
    const animation = el.animate(
      [{ transform: "translateX(0%)" }, { transform: "translateX(-50%)" }],
      {
        duration: 40000,
        iterations: Infinity,
        easing: "linear",
      }
    );

    return () => animation.cancel();
  }, []);

  const allProjectSlides = [...projectSlides, ...projectSlides];

  return (
    <>
      <div className=" bg-slate-600 textfont flex flex-col w-full h-[100vh]">
        <header className="min-h-full max-h-[85vh] flex overflow-hidden ">
          <div
            id="aboutme"
            className="min-w-full  p-10 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/khbg.png)]  bg-cover bg-no-repeat flex flex-col gap-10 pr-10 items-center relative"
          >
            <div className="absolute bottom-[-50px] right-[-50px] h-[1000vh] bg-[black]/100 blur-lg"></div>
            <div className="w-full flex flex-col gap-10">
              <h1 className="mb-3 text-5xl text-center font-extrabold">
                Welcome to my portfolio!
              </h1>
              <div className="flex items-center overflow-hidden border-2 border-white rounded-xl">
                <h2 className="text-xs p-2 text-center max-w-125">
                  My name is Geraldo, and I am currently learning everything
                  related to Full Stack Web Development! Down below you will see
                  what projects I have done so far.
                </h2>
                <div>
                  <img
                    src={img}
                    alt="profile picture of G.B"
                    className="w-120"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-1 bg-[#31312f] w-fit rounded-full">
              <div className="rounded-full bg-emerald-400 h-2.5 w-2.5"></div>
              <p className="text-xs">AVAILABLE FOR WORK</p>
            </div>
            <div className="w-full h-40 overflow-hidden bg-black rounded-2xl">
              <div ref={containerRef} className="flex w-max h-full gap-5">
                {allProjectSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl w-60 h-full flex items-center justify-center text-white text-xl ${slide.color} shrink-0`}
                  >
                    {slide.text}
                  </div>
                ))}
              </div>
            </div>
            <img
              src="/keyblade.svg"
              height="auto"
              width="55px"
              className="invert brightness-150 self-center absolute bottom-[50px] left-[44%]"
            />
          </div>
        </header>
      </div>
      <div className="flex flex-col items-center gap-5 py-10 bg-[#31312f]">
        <h2 className="text-3xl font-extrabold ">Tech Stack</h2>
        <div
          className="overflow-auto  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-black mt-auto mb-auto w-full px-10 flex gap-x-4 justify-center flex-wrap gap-y-4"
        >
          <TechStack />
        </div>
      </div>
    </>
  );
}
