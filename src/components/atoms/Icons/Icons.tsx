import Link from "next/link";
import React from "react";

type IconsType = {
  children: React.ReactNode;
  linkIcons?: string;
};
export const Icons = ({ children, linkIcons = "" }: IconsType) => {
  const styleIcons =
    "flex rounded-full hover:bg-slate-200 justify-center items-center w-[60%] h-[60%]";
  return (
    <Link href={linkIcons} className={styleIcons}>
      {children}
    </Link>
  );
};
