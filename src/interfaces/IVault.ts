import { iconNameType } from "@/types/IconNameType";

export interface IVaultItem {
  id: number;
  name: string;
  value: number;
  vaultId: number;
}

export interface IVault {
  id: number;
  name: string;
  targetPrice: number;
  icon: iconNameType;
}
