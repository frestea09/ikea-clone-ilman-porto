import { IoCloseOutline } from "react-icons/io5";
type NavbarMenuItemType = {
  isOpenTabMenu?: boolean;
  handleIsOpenTabMenu?: any;
};
export const NavbarMenuItem = ({
  isOpenTabMenu,
  handleIsOpenTabMenu,
}: NavbarMenuItemType) => {
  return (
    <div
      className={`${
        isOpenTabMenu ? "fixed" : "hidden"
      } transition-opacity z-50 top-0 left-0 right-0 bottom-0 h-full w-full flex justify-start items-start bg-slate-500 bg-opacity-50`}
    >
      <div className="bg-white w-1/3 h-full px-9 py-9 flex flex-col">
        <div className="flex flex-row justify-between px-6 items-center">
          <h1 className="text-4xl uppercase font-bold text-[#F6416C]">
            MYSTORE
          </h1>

          <button onClick={handleIsOpenTabMenu}>
            <IoCloseOutline size={"2em"} />
          </button>
        </div>
      </div>
    </div>
  );
};
