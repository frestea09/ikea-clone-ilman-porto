import { IoMenu } from "react-icons/io5";
type NavbarLogo = {
  handleIsOpenTabMenu: any;
};
export const NavbarLogo = ({ handleIsOpenTabMenu }: NavbarLogo) => {
  return (
    <div className="flex flex-row py-3 gap-5 justify-between items-center">
      <div
        onClick={handleIsOpenTabMenu}
        className="hover:bg-slate-200 rounded-full py-3 px-3"
      >
        <IoMenu size={"2em"} />
      </div>
      <h1 className="text-4xl uppercase font-bold text-[#F6416C]">MYSTORE</h1>
    </div>
  );
};
