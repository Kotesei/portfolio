export default function Stackcon({ source }) {
  return (
    <div className="bg-slate-700 p-1 rounded-full overflow-hidden">
      <img
        src={`https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/${source}`}
        width={20}
      />
    </div>
  );
}
