import { SearchBar } from "@/components/atoms/searchBar/SearchBar";
import Link from "next/link";

type NavbarMobileMenuType = {
  isMenuOpen: any;
};
export const NavbarMobileMenu = ({ isMenuOpen }: NavbarMobileMenuType) => {
  const menuNavbar = [
    {
      id: "menuOne",
      linkUrl: "/",
      labelMenu: "Our Products",
    },
    {
      id: "menuTwo",
      linkUrl: "/",
      labelMenu: "About",
    },
    {
      id: "menuThree",
      linkUrl: "/",
      labelMenu: "Blog",
    },
  ];
  return (
    <div
      className={`${
        isMenuOpen ? "flex" : "hidden"
      }  flex-col justify-start h-screen bg-white px-10 py-4 md:h-96 gap-11`}
    >
      <div>
        <SearchBar />
      </div>
      <ul className="nav flex flex-col justify-start gap-9 text-lg">
        {menuNavbar.map((item) => (
          <li key={item.id}>
            <Link
              href={item.linkUrl}
              className="nav-link text-[#030637] hover:text-[#3C0753] hover:underline decoration-[#910A67] underline-offset-8"
            >
              {item.labelMenu}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-9">
        <button className="text-lg border-[#720455] border px-2 py-1 rounded-md">
          Login
        </button>
        <button className="text-lg px-4 py-3 bg-[#910A67] hover:bg-[#720455] rounded-md text-amber-50">
          Register
        </button>
      </div>
    </div>
  );
};
