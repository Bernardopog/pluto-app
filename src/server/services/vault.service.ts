import { IMessage } from "@/interfaces/IMessage";
import { IVault } from "@/interfaces/IVault";
import { IVaultCreateDTO, IVaultUpdateDTO } from "../dto/vault.dto";
import { vaultRepository } from "../repositories/vault.repository";
import { vaultSchema } from "../schema/vault.schema";
import { createMessage } from "../utils/message";
import { idValidator } from "../utils/idValidator";
import { decimalToInt, intToDecimal } from "@/server/utils/convertMoney";

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

const toPersistence = (data: IVaultCreateDTO | IVaultUpdateDTO) => ({
  ...data,
  targetPrice: decimalToInt(data.targetPrice),
});

const toResponse = (data: IVault) => ({
  ...data,
  targetPrice: intToDecimal(data.targetPrice),
});

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

    const formattedRes = res.map((vault) => toResponse(vault));

    return createMessage("Cofres obtidos com sucesso", 200, formattedRes);
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

    const finalData = toPersistence(transformedData);

    const res = await vaultRepository.create(finalData, userId);

    const returnData = toResponse(res);

    return createMessage("Cofre criado com sucesso", 201, returnData);
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

    const finalData = toPersistence(transformedData);

    const res = await vaultRepository.update(id, finalData, userId);
    if (!res.success) {
      if (res.status === 404) {
        return createMessage("Cofre nao encontrado", res.status, null);
      } else return createMessage("Erro ao atualizar cofre", res.status, null);
    }

    const returnData = toResponse(res.data as IVault);

    return createMessage(
      "Cofre atualizado com sucesso",
      res.status,
      returnData
    );
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
