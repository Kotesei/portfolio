export default function Project() {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <h2 className="text-center font-extrabold text-5xl textfont">
        Project Name
      </h2>
      <p className="text-xl max-w-200 text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio,
        impedit! Quasi necessitatibus obcaecati consectetur blanditiis sapiente?
        Atque, laborum! Quam temporibus doloremque modi nihil natus nemo at,
        sequi reiciendis. Culpa, saepe.
      </p>
      <div className="flex gap-5 justify-center">
        <button className="bg-[#31312f] px-3 py-2 rounded cursor-pointer outline-2 outline-transparent hover:outline-white transition-all duration-500 ease-in-out">
          Source Code
        </button>
        <button className="px-3 py-2 rounded cursor-pointer outline-2 outline-transparent hover:outline-white transition-all duration-500 ease-in-out">
          Use Cases
        </button>
      </div>
    </div>
  );
}
