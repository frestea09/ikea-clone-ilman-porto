"use client";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { NavbarMobileMenu } from "./NavbarMobileMenu";

export const NavbarMoblie = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className="lg:hidden sticky top-0 left-0 z-30 w-full">
      <div className="flex  bg-white h-20 shadow-md items-center justify-between px-6">
        <div className="container mx-auto">
          <nav className=" flex justify-between items-center py-2 px-3">
            <IoMenu
              size={35}
              onClick={() => {
                setIsMenuOpen((prevState) => !prevState);
              }}
            />
            <Link
              href="index.html"
              className="logo text-xl text-[#F6416C] gap-2 font-bold uppercase"
            >
              {"MYSTORE"}
            </Link>
            <CiSearch
              size={35}
              onClick={() => {
                setIsMenuOpen((prevState) => !prevState);
              }}
            />
          </nav>
        </div>
      </div>
      <NavbarMobileMenu isMenuOpen={isMenuOpen} />
    </div>
  );
};
