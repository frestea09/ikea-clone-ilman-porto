"use client";
import { SearchBar } from "@/components/atoms/searchBar/SearchBar";
import { ListIcons } from "@/components/molecules/ListIcons/ListIcons";
import { NavbarLogo } from "@/components/molecules/NavbarLogo/NavbarLogo";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { NavbarMenuItem } from "./NavbarMenuItem";

export const Navbar = () => {
  const [isOpenTabMenu, setIsOpenTabMenu] = useState(false);
  const handleIsOpenTabMenu = () => {
    setIsOpenTabMenu((prevState) => !prevState);
  };
  return (
    <div className=" hidden lg:sticky top-0 left-0 right-0 bg-white lg:flex flex-row justify-between w-full items-center px-7">
      <NavbarLogo handleIsOpenTabMenu={handleIsOpenTabMenu} />
      <SearchBar />
      <ListIcons />
      <NavbarMenuItem
        isOpenTabMenu={isOpenTabMenu}
        handleIsOpenTabMenu={handleIsOpenTabMenu}
      />
    </div>
  );
};
