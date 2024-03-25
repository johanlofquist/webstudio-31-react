import { FaRobot } from "react-icons/fa";

export const Landing = () => {
  return (
    <div className="h-[700px] w-full flex flex-col justify-center items-center mb-32">
      <div className="flex gap-4 items-center">
        <FaRobot className="text-4xl mb-1"/>
        <p>Design- & Webbyrå</p>
      </div>
      <h1 className="text-[88px] font-bold text-center">Stora idéer för små projekt</h1>
      <p className="text-2xl">En byrå för alla dina kreativa idéer.</p>
      <a href="" className="bg-[--ws31red] text-white hover:text-black py-4 px-8 text-[13px] mt-12">Jag är intresserad!</a>
    </div>
  );
};
