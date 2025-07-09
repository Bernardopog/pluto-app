import { IconType } from "react-icons";
import {
  BsCarFront,
  BsCarFrontFill,
  BsPiggyBank,
  BsPiggyBankFill,
} from "react-icons/bs";
import { MdAirplanemodeActive } from "react-icons/md";

interface IIcon {
  name: string;
  icon: IconType;
  hasOutline?: boolean;
  outlineIcon?: IconType;
}

export type iconNameType = "plane" | "piggy" | "car";

type IIconMap = {
  [Key in iconNameType]: IIcon;
};

export const iconsMap: IIconMap = {
  plane: {
    name: "Avião",
    icon: MdAirplanemodeActive,
  },
  piggy: {
    name: "Porco",
    icon: BsPiggyBankFill,
    hasOutline: true,
    outlineIcon: BsPiggyBank,
  },
  car: {
    name: "Carro",
    icon: BsCarFrontFill,
    hasOutline: true,
    outlineIcon: BsCarFront,
  },
};
