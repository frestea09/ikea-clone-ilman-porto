import { SearchBar } from "@/components/atoms/searchBar/SearchBar";
import { ListIcons } from "@/components/molecules/ListIcons/ListIcons";
import { NavbarLogo } from "@/components/molecules/NavbarLogo/NavbarLogo";

export const Navbar = () => {
  return (
    <div className=" sticky top-0 left-0 right-0 bg-white flex flex-row justify-between w-full items-center px-7">
      <NavbarLogo />
      <SearchBar />
      <ListIcons />
    </div>
  );
};
