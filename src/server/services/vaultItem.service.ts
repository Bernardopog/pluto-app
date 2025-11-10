import type { IMessage } from '@/interfaces/IMessage';
import type { IVaultItem } from '@/interfaces/IVault';
import { decimalToInt, intToDecimal } from '@/server/utils/convertMoney';
import type {
  IVaultItemCreateDTO,
  IVaultItemUpdateDTO,
} from '../dto/vaultItem.dto';
import { vaultItemRepository } from '../repositories/vaultItem.repository';
import { vaultItemSchema } from '../schema/vaultItem.schema';
import { idValidator } from '../utils/idValidator';
import { createMessage } from '../utils/message';

interface IVaultItemService {
  getAll(userId: number): Promise<IMessage<IVaultItem[]>>;
  create(
    data: IVaultItemCreateDTO,
    userId: number,
  ): Promise<IMessage<IVaultItem | null>>;
  update(
    id: number,
    data: IVaultItemUpdateDTO,
    userId: number,
  ): Promise<IMessage<IVaultItem | null>>;
  delete(id: number, userId: number): Promise<IMessage<null>>;
}

const vaultItemValidate = (data: IVaultItemCreateDTO | IVaultItemUpdateDTO) =>
  vaultItemSchema.safeParse(data);

const toPersistence = (data: IVaultItemCreateDTO | IVaultItemUpdateDTO) => ({
  ...data,
  value: decimalToInt(data.value),
});

const toResponse = (data: IVaultItem) => ({
  ...data,
  value: intToDecimal(data.value),
});

export const vaultItemService: IVaultItemService = {
  getAll: async (userId) => {
    const res = await vaultItemRepository.getAll(userId);

    const formattedRes = res.map((item) => toResponse(item));

    return createMessage('Items encontrados com sucesso', 200, formattedRes);
  },
  create: async (data, userId) => {
    const { success, data: transformedData } = vaultItemValidate(data);

    if (!success) {
      return createMessage('Erro ao criar item', 400, null);
    }

    const finalData = toPersistence(transformedData);

    const res = await vaultItemRepository.create(finalData, userId);

    const returnData = toResponse(res);

    return createMessage('Item criado com sucesso', 201, returnData);
  },
  update: async (id, data, userId) => {
    if (!idValidator(id)) {
      return createMessage('Erro ao atualizar item', 400, null);
    }

    const { success, data: transformedData } = vaultItemValidate(data);

    if (!success) {
      return createMessage('Erro ao atualizar item', 400, null);
    }

    const finalData = toPersistence(transformedData);

    const res = await vaultItemRepository.update(id, finalData, userId);
    if (!res.success) {
      if (res.status === 404) {
        return createMessage('Item nao encontrado', res.status, null);
      } else return createMessage('Erro ao atualizar item', res.status, null);
    }

    const returnData = toResponse(res.data as IVaultItem);

    return createMessage('Item atualizado com sucesso', res.status, returnData);
  },
  delete: async (id, userId) => {
    if (id <= 0) {
      return createMessage('Erro ao excluir item', 400, null);
    }
    const res = await vaultItemRepository.delete(id, userId);

    if (!res.success) {
      if (res.status === 404) {
        return createMessage('Item nao encontrado', res.status, null);
      } else return createMessage('Erro ao deletar item', res.status, null);
    }

    return createMessage('Item excluido com sucesso', res.status, null);
  },
};
