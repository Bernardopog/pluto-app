import { IVaultItem } from "@/interfaces/IVault";
import { IVaultItemCreateDTO, IVaultItemUpdateDTO } from "../dto/vaultItem.dto";
import { vaultItemSchema } from "../schema/vaultItem.schema";
import { createMessage } from "../utils/message";
import { idValidator } from "../utils/idValidator";
import { vaultItemRepository } from "../repositories/vaultItem.repository";
import { IMessage } from "@/interfaces/IMessage";
interface IVaultItemService {
  create(
    data: IVaultItemCreateDTO,
    userId: number
  ): Promise<IMessage<IVaultItem | null>>;
  update(
    id: number,
    data: IVaultItemUpdateDTO,
    userId: number
  ): Promise<IMessage<IVaultItem | null>>;
  delete(id: number, userId: number): Promise<IMessage<null>>;
}

const vaultItemValidate = (data: IVaultItemCreateDTO | IVaultItemUpdateDTO) =>
  vaultItemSchema.safeParse(data);

export const vaultItemService: IVaultItemService = {
  create: async (data, userId) => {
    const { success, data: transformedData } = vaultItemValidate(data);

    if (!success) {
      return createMessage("Erro ao criar item", 400, null);
    }

    const res = await vaultItemRepository.create(transformedData, userId);

    return createMessage("Item criado com sucesso", 201, res);
  },
  update: async (id, data, userId) => {
    if (!idValidator(id)) {
      return createMessage("Erro ao atualizar item", 400, null);
    }

    const { success, data: transformedData } = vaultItemValidate(data);

    if (!success) {
      return createMessage("Erro ao atualizar item", 400, null);
    }

    const res = await vaultItemRepository.update(id, transformedData, userId);
    if (!res.success) {
      if (res.status === 404) {
        return createMessage("Item nao encontrado", res.status, null);
      } else return createMessage("Erro ao atualizar item", res.status, null);
    }

    return createMessage("Item atualizado com sucesso", res.status, res.data);
  },
  delete: async (id, userId) => {
    if (id <= 0) {
      return createMessage("Erro ao excluir item", 400, null);
    }
    const res = await vaultItemRepository.delete(id, userId);

    if (!res.success) {
      if (res.status === 404) {
        return createMessage("Item nao encontrado", res.status, null);
      } else return createMessage("Erro ao deletar item", res.status, null);
    }

    return createMessage("Item excluido com sucesso", res.status, null);
  },
};
