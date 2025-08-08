import { iconNameType } from "@/types/IconNameType";

export interface IVaultCreateDTO {
  name: string;
  targetPrice: number;
  icon: iconNameType;
}

export interface IVaultUpdateDTO {
  name: string;
  targetPrice: number;
  icon: iconNameType;
}
