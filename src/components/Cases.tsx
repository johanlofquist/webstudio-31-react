import { Baeza } from "./Baeza";
import { Elcompaniet } from "./Elcompaniet";

export const Cases = () => {
  return (
    <div className="w-full flex gap-10 flex-wrap justify-center items-start pb-10">
      <Elcompaniet />
      <Baeza />
    </div>
  );
};
