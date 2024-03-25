import mosquito from "../assets/mygga.svg";
import deadMosquito from "../assets/deadmygga.svg";
import { useEffect, useState } from "react";
import ljud from "../assets/squish.mp3";

export const Mosquito = () => {
  const [x, setX] = useState(200);
  const [y, setY] = useState(500);
  const [isFlyAlive, setIsFlyAlive] = useState(true);

  useEffect(() => {
    if (isFlyAlive) {
      const interval = setInterval(() => {
        let randomX = Math.floor(Math.random() * 5) - 2;
        let randomY = Math.floor(Math.random() * 5) - 2;
        setX(x + randomX);
        setY(y + randomY);
      }, 10);

      return () => clearInterval(interval);
    }
  }, [x, y]);

  const handleClick = () => {
    console.log("hej");
    setIsFlyAlive(false);
    let squish = new Audio(ljud);
    squish.play();
  };

  return isFlyAlive ? (
    <img
      src={mosquito}
      style={{
        position: "absolute",
        top: y + "px",
        right: x + "px",
        width: "50px",
        zIndex: "99",
      }}
      onClick={handleClick}
    />
  ) : (
    <img
      src={deadMosquito}
      style={{
        position: "absolute",
        top: y + "px",
        right: x + "px",
        width: "50px",
        zIndex: "99",
      }}
    />
  );
};
