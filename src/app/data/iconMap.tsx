import { iconNameType } from "@/types/IconNameType";
import { IconType } from "react-icons";
import {
  BsCarFront,
  BsCarFrontFill,
  BsPiggyBank,
  BsPiggyBankFill,
} from "react-icons/bs";
import { MdAirplanemodeActive } from "react-icons/md";

interface IIcon {
  name: iconNameType;
  icon: IconType;
  hasOutline?: boolean;
  outlineIcon?: IconType;
}

type IIconMap = {
  [Key in iconNameType]: IIcon;
};

export const iconsMap: IIconMap = {
  plane: {
    name: "plane",
    icon: MdAirplanemodeActive,
  },
  piggy: {
    name: "piggy",
    icon: BsPiggyBankFill,
    hasOutline: true,
    outlineIcon: BsPiggyBank,
  },
  car: {
    name: "car",
    icon: BsCarFrontFill,
    hasOutline: true,
    outlineIcon: BsCarFront,
  },
};

export const iconsArray = Object.values(iconsMap);
