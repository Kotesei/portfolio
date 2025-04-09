import Stackcon from "./Stackcon";
const skills = {
  languages: ["html5", "css3", "javascript"],
  libraries: ["react"],
  runtimes: ["nodejs"],
  frameworks: ["tailwindcss"],
  tools: ["chrome", "git", "vscode", "github"],
};

export default function TechStack() {
  return (
    <>
      {Object.entries(skills).map(([category, items], i) => (
        <div key={i} className="bg-black rounded p-5 flex flex-col">
          <h2 className="text-center capitalize">{category}</h2>
          <div className="flex gap-2 pt-3 justify-center flex-wrap">
            {items.map((item, j) => (
              <Stackcon key={j} source={`icons/${item}/${item}-original.svg`} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
