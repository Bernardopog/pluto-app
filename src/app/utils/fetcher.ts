import { IMessage } from "@/interfaces/IMessage";

export function fetcher<U>(url: string) {
  const responseHandler = async <T>(res: Response): Promise<IMessage<T>> => {
    const { message, status, data } = await res.json();
    return { message, status, data };
  };

  return {
    get: async (): Promise<IMessage<U>> => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        return responseHandler<U>(res);
      } catch {
        return { message: "Requisição errada", status: 400 };
      }
    },
    post: async <T>(body: T) => {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(body),
        });
        return responseHandler<U>(res);
      } catch {
        return { message: "Requisição errada", status: 400 };
      }
    },
    put: async <T>(id: number, body: T) => {
      try {
        const res = await fetch(`${url}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(body),
        });
        return responseHandler<U>(res);
      } catch {
        return { message: "Requisição errada", status: 400 };
      }
    },
    delete: async (id: number) => {
      try {
        const res = await fetch(`${url}/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        return responseHandler<U>(res);
      } catch {
        return { message: "Requisição errada", status: 400 };
      }
    },
    moveTxn: async (id: number, body: { toId: number }) => {
      try {
        const res = await fetch(`${url}/${id}/move-txn`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(body),
        });
        return responseHandler<U>(res);
      } catch {
        return { message: "Requisição errada", status: 400 };
      }
    },
    deleteManyTxn: async (ids: number[]) => {
      try {
        const res = await fetch(`${url}/delete-many`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(ids),
        });
        return responseHandler<U>(res);
      } catch {
        return { message: "Requisição errada", status: 400 };
      }
    },
    deleteAllTxn: async () => {
      try {
        const res = await fetch(`${url}/delete-all`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        return responseHandler<U>(res);
      } catch {
        return { message: "Requisição errada", status: 400 };
      }
    },
    finishGoal: async (query: "complete" | "cancel") => {
      try {
        const res = await fetch(`${url}/?action=${query}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        return responseHandler<U>(res);
      } catch {
        return { message: "Requisição errada", status: 400 };
      }
    },
    reassign: async (newVaultId: number) => {
      try {
        const res = await fetch(`${url}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ assignedVault: newVaultId }),
        });
        return responseHandler<U>(res);
      } catch {
        return { message: "Requisição errada", status: 400 };
      }
    },
    financePatch: async (type: "balance" | "income", value: number) => {
      try {
        const res = await fetch(`${url}/?action=${type}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ value: value }),
        });
        return responseHandler<U>(res);
      } catch {
        return { message: "Requisição errada", status: 400 };
      }
    },
  };
}
