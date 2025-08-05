import { iconNameType } from "@/types/IconNameType";

export interface IVaultItem {
  id: string;
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
