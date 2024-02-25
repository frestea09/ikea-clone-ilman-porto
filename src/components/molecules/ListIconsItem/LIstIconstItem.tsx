import { Icons } from "@/components/atoms/Icons/Icons";

type ListIconsItemType = {
  item: any;
};
export const LIstIconsItem = ({ item }: ListIconsItemType) => {
  return (
    <li className="flex justify-center items-center align-middle w-full h-full py-2 px-8">
      <Icons>{item}</Icons>
    </li>
  );
};
