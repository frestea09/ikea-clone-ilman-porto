import { IoMenu } from "react-icons/io5";

export const NavbarLogo = () => {
  return (
    <div className="flex flex-row py-3 gap-5 justify-between items-center">
      <div className="hover:bg-slate-200 rounded-full py-3 px-3">
        <IoMenu size={"2em"} />
      </div>
      <h1 className="text-4xl uppercase font-bold text-[#08D9D6]">MYSTORE</h1>
    </div>
  );
};
