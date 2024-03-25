import { MdWork } from "react-icons/md";
import { Baeza } from "./Baeza";
import { Elcompaniet } from "./Elcompaniet";

export const Cases = () => {
  return (
    <>
      <div className="h-[460px] bg-[#2A2A2A] flex flex-col justify-center items-center gap-5 mt-32">
        <div className="flex gap-2 text-white items-center">
          <MdWork className="text-3xl" />
          <p>Vad vi har gjort</p>
        </div>
        <h1 className="text-[88px] font-[700] text-white">Cases</h1>
        <p className="text-2xl text-white">
          Inga fler långa ledtider - vi är en liten byrå med fokus på ett nära
          samarbete
        </p>
      </div>

      <div className="w-full flex gap-16 flex-wrap justify-center items-start p-20">
        <Elcompaniet />
        <Baeza />
      </div>
    </>
  );
};
