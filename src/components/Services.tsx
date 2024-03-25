import { FaPaintRoller } from "react-icons/fa6";
import { FaDesktop } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa";

export const Services = () => {
  return (
    <>
      <div className="h-[460px] bg-[#2A2A2A] flex flex-col justify-center items-center gap-5">
        <div className="flex gap-2 text-white items-center">
          <FaPaintRoller className="text-3xl" />
          <p>Vad vi erbjuder</p>
        </div>
        <h1 className="text-[88px] font-[700] text-white">Tjänster</h1>
        <p className="text-2xl text-white">
          Inga fler långa ledtider - vi är en liten byrå med fokus på ett nära
          samarbete
        </p>
      </div>
      <div className="flex flex-wrap">
        <div className="w-1/3 h-[320px] bg-[--ws31red] px-6 flex flex-col justify-center gap-4 text-white">
          <FaDesktop className="text-4xl" />
          <h2 className="text-[32px]">Website</h2>
          <p className="text-[20px] font-[300]">
            Företagssida, organisationssida, portfolio eller det du/ni behöver.
            Ditt skyltfönster!
          </p>
        </div>
        <div className="w-1/3 h-[320px] bg-[--ws31green] px-6 flex flex-col justify-center gap-4 text-black">
          <FaEye className="text-4xl" />
          <h2 className="text-[32px]">Brand Identity</h2>
          <p className="text-[20px] font-[300]">
            Vi hjälper dig med brand identity, grafisk profil eller logga.
          </p>
        </div>
        <div className="w-1/3 h-[320px] bg-[--ws31purple] px-6 flex flex-col justify-center gap-4 text-white">
          <FaBox className="text-4xl" />
          <h2 className="text-[32px]">Content</h2>
          <p className="text-[20px] font-[300]">
            Tillsammans sätter vi upp en contentplan som innehåller vad, var och
            när.
          </p>
        </div>
        <div className="w-1/3 h-[320px] bg-[--ws31yellow] px-6 flex flex-col justify-center gap-4 text-black">
          <FaKeyboard className="text-4xl" />
          <h2 className="text-[32px]">Communication</h2>
          <p className="text-[20px] font-[300]">
            Pressmeddelande, årsredovisning eller annan kommunikation som känns
            lurig?
          </p>
        </div>
        <div className="w-1/3 h-[320px] bg-[--ws31teal] px-6 flex flex-col justify-center gap-4 text-black">
          <FaRegThumbsUp className="text-4xl" />
          <h2 className="text-[32px]">Sociala medier</h2>
          <p className="text-[20px] font-[300]">
            Annonsering eller organiskt innehåll? Vi fixar det!
          </p>
        </div>
        <div className="w-1/3 h-[320px] bg-[--ws31pink] px-6 flex flex-col justify-center gap-4 text-white">
          <FaRegHandshake className="text-4xl" />
          <h2 className="text-[32px]">Samarbete</h2>
          <p className="text-[20px] font-[300]">
            Hand i hand vandrar vi genom den snåriga digitala djungeln.
          </p>
        </div>
      </div>
    </>
  );
};
