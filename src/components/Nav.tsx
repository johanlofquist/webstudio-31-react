import logo from "../assets/logo.svg";

export const Nav = () => {
  return (
    <div className="h-[70px] flex justify-between items-center sticky top-0 left-0 w-full">
      <div className="flex items-center gap-2">
        <img src={logo} className="h-[40px]" />
        <p className="font-[600] text-[24px]">
          Webstudio 31<span className="text-[--ws31red]">.</span>
        </p>
      </div>
      <div className="flex gap-5">
        <a href="" className="py-2 px-4 hover:bg-[--ws31red] hover:text-white">
          Hem
        </a>
        <a href="" className="py-2 px-4 hover:bg-[--ws31red] hover:text-white">
          Case
        </a>
        <a href="" className="py-2 px-4 hover:bg-[--ws31red] hover:text-white">
          Tjänster
        </a>
        <a href="" className="py-2 px-4 hover:bg-[--ws31red] hover:text-white">
          Om
        </a>
        <a href="" className="py-2 px-4 hover:bg-[--ws31red] hover:text-white">
          Kontakt
        </a>
      </div>
    </div>
  );
};
