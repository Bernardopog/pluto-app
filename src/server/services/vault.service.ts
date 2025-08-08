import { IMessage } from "@/interfaces/IMessage";
import { IVault } from "@/interfaces/IVault";
import { IVaultCreateDTO, IVaultUpdateDTO } from "../dto/vault.dto";
import { vaultRepository } from "../repositories/vault.repository";
import { vaultSchema } from "../schema/vault.schema";
import { createMessage } from "../utils/message";
import { idValidator } from "../utils/idValidator";

interface IVaultService {
  getAll: (userId: number) => Promise<IMessage<IVault[]>>;
  create: (
    data: IVaultCreateDTO,
    userId: number
  ) => Promise<IMessage<IVault | null>>;
  update: (
    id: number,
    data: IVaultUpdateDTO,
    userId: number
  ) => Promise<IMessage<IVault | null>>;
  delete: (id: number, userId: number) => Promise<IMessage<null>>;
}

const vaultValidate = (data: IVaultCreateDTO | IVaultUpdateDTO) =>
  vaultSchema.safeParse(data);

enum VaultIconsEnum {
  plane = "plane",
  piggy = "piggy",
  car = "car",
}

const iconToEnum = (icon: string): VaultIconsEnum | null => {
  const lowerIcon = icon.toLowerCase();
  if (Object.values(VaultIconsEnum).includes(lowerIcon as VaultIconsEnum)) {
    return lowerIcon as VaultIconsEnum;
  }
  return null;
};

export const vaultService: IVaultService = {
  getAll: async (userId) => {
    const res = await vaultRepository.getAll(userId);
    return createMessage("Cofres obtidos com sucesso", 200, res);
  },
  create: async (data, userId) => {
    const { success, data: transformedData } = vaultValidate(data);

    if (!success) {
      return createMessage("Erro ao criar vault", 400, null);
    }

    const iconAsEnum = iconToEnum(transformedData.icon);

    if (!iconAsEnum) {
      return createMessage("Ícone inválido", 400, null);
    }

    transformedData.icon = iconAsEnum;

    console.log("===>", transformedData);
    console.log("===>", userId);

    const res = await vaultRepository.create(transformedData, userId);

    return createMessage("Cofre criado com sucesso", 201, res);
  },
  update: async (id, data, userId) => {
    if (!idValidator(id)) {
      return createMessage("Erro ao atualizar cofre", 400, null);
    }

    const { success, data: transformedData } = vaultValidate(data);

    if (!success) {
      return createMessage("Erro ao atualizar cofre", 400, null);
    }

    const iconAsEnum = iconToEnum(transformedData.icon);

    if (!iconAsEnum) {
      return createMessage("Ícone inválido", 400, null);
    }

    transformedData.icon = iconAsEnum;

    const res = await vaultRepository.update(id, transformedData, userId);
    if (!res.success) {
      if (res.status === 404) {
        return createMessage("Cofre nao encontrado", res.status, null);
      } else return createMessage("Erro ao atualizar cofre", res.status, null);
    }

    return createMessage("Cofre atualizado com sucesso", res.status, res.data);
  },
  delete: async (id, userId) => {
    if (!idValidator(id)) {
      return createMessage("Erro ao excluir cofre", 400, null);
    }
    const res = await vaultRepository.delete(id, userId);

    if (!res.success) {
      if (res.status === 404) {
        return createMessage("Cofre nao encontrado", res.status, null);
      } else return createMessage("Erro ao deletar cofre", res.status, null);
    }

    return createMessage("Cofre excluido com sucesso", res.status, null);
  },
};
