import { AnimatePresence, motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import { PiLeafDuotone } from "react-icons/pi";
import film from "../assets/testbaeza.mov";

export const Baeza = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-[500px] flex flex-col items-start"
      whileHover={{ y: -15 }}
    >
      {isHovered ? (
        <video
          autoPlay
          className="h-[300px] rounded-md drop-shadow-md transition-all bg-[#0f182a]"
        >
          <source src={film} />
        </video>
      ) : (
        <div className="w-[500px] h-[300px] bg-[#e8f0ec] rounded-md drop-shadow-md flex justify-center items-center transition-all">
          <PiLeafDuotone className="text-5xl text-[#4abd7f]" />
          <div className="flex flex-col gap-0">
            <p className="text-black cantarell-bold text-lg leading-4">
              ANDERSSON BAEZA
            </p>
            <p className="text-slate-500 cantarell-regular text-sm leading-4">
              KONSULTTJÄNSTER
            </p>
          </div>
        </div>
      )}
      <div className="p-2 text-2xl relative overflow-hidden">
        Andersson Baeza Konsultjänster
        <AnimatePresence>
          {isHovered ? (
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: -370 }}
              exit={{ x: -370 }}
              className="border-t-4 border-[--ws31red] absolute left-1 bottom-2 right-1"
            ></motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
      </div>
      <p className="p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minima
        quod, tempore perferendis maxime eos voluptatem officia dolor quisquam
        praesentium unde velit? Facere vero, earum illum enim consequatur
        maxime. Eum?
      </p>
      <a
        href="https://elcompanietab.com"
        target="_blank"
        className="flex gap-2 p-2"
      >
        LIVE SITE
        <FaLongArrowAltRight className="mt-1" />
      </a>
    </motion.div>
  );
};
