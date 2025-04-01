import img from "../assets/gb.jpg";
export default function Header() {
  return (
    <header className="w-full h-150 flex overflow-hidden">
      <div
        id="aboutme"
        className="textfont bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/khbg.png)]  bg-cover bg-no-repeat flex-[300px] flex flex-col gap-10 pl-10 justify-center relative"
      >
        <div className="absolute bottom-0 right-[-50px] h-[1000px] w-25 bg-[black]/100 blur-lg"></div>
        <div>
          <h1 className="mb-3 font-extrabold">Welcome to my portfolio!</h1>
          <h2 className="pr-20 w-125">
            My name is Geraldo, and I am currently learning everything related
            to Full Stack Web Development! Down below you will see what projects
            I have done so far.
          </h2>
        </div>
        <div className="flex items-center gap-2 px-4 py-1 bg-slate-600 w-fit rounded-full">
          <div className="rounded-full bg-emerald-400 h-2.5 w-2.5"></div>
          <p className="text-xs">AVAILABLE FOR WORK</p>
        </div>
        <img
          src="/keyblade.svg"
          height="auto"
          width="55px"
          className="invert brightness-150 self-center absolute bottom-[50px] left-[44%]"
        />
      </div>
      <img className="" src={img} alt="profile picture of G.B" />
    </header>
  );
}
