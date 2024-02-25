import { LIstIconsItem } from "../ListIconsItem/LIstIconstItem";
import { DataListOfIcons } from "@/assets/data/listOfIcons";

export const ListIcons = () => {
  return (
    <ul
      className="flex flex-row gap-3 justify-between w-[20%] h-[100px] "
      data-testId="list-icons-test"
    >
      {DataListOfIcons.map((item) => (
        <LIstIconsItem key={item.idICons} item={item.iconsItem} />
      ))}
    </ul>
  );
};
