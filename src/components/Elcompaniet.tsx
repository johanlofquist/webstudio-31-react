import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logowhite.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import film from "../assets/testelcomp.mov";

export const Elcompaniet = () => {
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
      <video autoPlay muted className="hidden">
        <source src={film} />
      </video>
      {isHovered ? (
        <video
          autoPlay
          muted
          className="h-[300px] drop-shadow-md transition-all bg-[#0f182a]"
        >
          <source src={film} />
        </video>
      ) : (
        <div className="w-[500px] h-[300px] bg-[#0f182a] drop-shadow-md flex justify-center items-center transition-all">
          <img src={logo} className="w-[200px]" />
        </div>
      )}
      <div className="p-2 text-2xl relative overflow-hidden">
        Elcompaniet AB
        <AnimatePresence>
          {isHovered ? (
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: -200 }}
              exit={{ x: -200 }}
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
