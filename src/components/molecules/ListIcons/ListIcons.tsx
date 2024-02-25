import { Icons } from "@/components/atoms/Icons/Icons";
import { FaRegUser } from "react-icons/fa";
import { LIstIconsItem } from "../ListIconsItem/LIstIconstItem";

export const ListIcons = () => {
  const itemDisplay = [
    {
      idICons: 1,
      iconsItem: <FaRegUser size={"1em"} />,
    },
    {
      idICons: 2,
      iconsItem: <FaRegUser size={"1em"} />,
    },
    {
      idICons: 3,
      iconsItem: <FaRegUser size={"1em"} />,
    },
  ];

  return (
    <ul
      className="flex flex-row gap-3 justify-between w-[30%] h-[100px] "
      data-testId="list-icons-test"
    >
      {itemDisplay.map((item) => (
        <LIstIconsItem key={item.idICons} item={item.iconsItem} />
      ))}
    </ul>
  );
};
