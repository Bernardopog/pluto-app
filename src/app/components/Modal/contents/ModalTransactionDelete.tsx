"use client";

import { useMessageStore } from "@/app/stores/useMessageStore";
import { useModalStore } from "@/app/stores/useModalStore";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { useShallow } from "zustand/shallow";

type DeleteType = "individual" | "group" | "all";

export default function ModalTransactionDelete({ type }: { type: DeleteType }) {
  const toggleModal = useModalStore((s) => s.toggleModal);

  const transactionMethods = useTransactionBudgetStore(
    (s) => s.transactionMethods
  );

  const setMessage = useMessageStore((s) => s.setMessage);

  const {
    transactionList,
    transactionDeletion,
    transactionSelection,
    budgetList,
  } = useTransactionBudgetStore(
    useShallow((s) => ({
      transactionList: s.transactionData.list,
      transactionDeletion: s.transactionDeletion,
      transactionSelection: s.transactionSelection,
      budgetList: s.budgetData.list,
    }))
  );

  const handleDelete = () => {
    if (type === "all") {
      transactionMethods.deleteAll().then(({ message, status }) =>
        setMessage({
          message,
          status,
          description:
            status === 200
              ? "Todas as transações foram deletadas com sucesso!"
              : "Ocorreu um erro ao deletar todas as transações",
        })
      );
    } else if (type === "group") {
      transactionMethods.deleteMany().then(({ message, status }) =>
        setMessage({
          message,
          status,
          description:
            status === 200
              ? "As transações foram deletadas com sucesso!"
              : "Ocorreu um erro ao deletar as transações",
        })
      );
      transactionDeletion.setIsDeleting(false);
    } else if (type === "individual" && transactionSelection.selected) {
      transactionMethods
        .delete(transactionSelection.selected.id)
        .then(({ message, status }) =>
          setMessage({
            message,
            status,
            description:
              status === 200
                ? "A transação foi deletada com sucesso!"
                : "Ocorreu um erro ao deletar a transação",
          })
        );
    }

    toggleModal();
    transactionSelection.unselect();
  };

  const handleCancel = () => {
    toggleModal();
    transactionSelection.unselect();
  };

  let date = "";
  if (transactionSelection.selected)
    date = new Date(transactionSelection.selected.date).toLocaleDateString(
      "pt-BR"
    );

  return (
    <div className="flex flex-col">
      <p className="text-2xl text-center text-chetwode-blue-950 dark:text-chetwode-blue-50">
        Você tem certeza que quer deletar{" "}
        {type === "individual"
          ? "essa Transação"
          : type === "group"
          ? "essas Transações"
          : "todas as Transações"}{" "}
        ?
      </p>
      {transactionSelection.selected && type === "individual" && (
        <div className="flex flex-col p-2 rounded-lg text-2xl text-center text-chetwode-blue-950 bg-chetwode-blue-200 dark:bg-chetwode-blue-700 dark:text-chetwode-blue-50">
          <span>Nome: {transactionSelection.selected.name}</span>
          <span>
            Valor:{" "}
            {moneyFormatter(Math.abs(transactionSelection.selected.value))}
          </span>
          <span>Data: {date}</span>
          <span>
            Categoria:{" "}
            {
              budgetList.find(
                (budget) =>
                  budget.id === transactionSelection.selected?.categoryId
              )?.name
            }
          </span>
        </div>
      )}
      {type === "group" && (
        <ul className="flex flex-col min-h-0 max-h-64 py-4 px-2 rounded-lg gap-4 bg-chetwode-blue-100 dark:bg-chetwode-blue-700">
          {transactionDeletion.list.map((txnId) =>
            transactionList.map(
              (transaction) =>
                transaction.id === txnId && (
                  <li
                    key={transaction.id}
                    className={`p-1 rounded-lg shadow-md bg-gradient-to-r from-[50%] to-[200%] text-chetwode-blue-950 dark:text-chetwode-blue-50 ${
                      transaction.value >= 0
                        ? "from-chetwode-blue-200 to-green-200 dark:from-chetwode-blue-800 dark:to-green-500"
                        : "from-chetwode-blue-200 to-red-200 dark:from-chetwode-blue-800 dark:to-red-500"
                    }`}
                  >
                    <p className="flex justify-between">
                      <span>{transaction.name}</span>
                      <span>{moneyFormatter(transaction.value)}</span>
                    </p>
                  </li>
                )
            )
          )}
        </ul>
      )}
      <p className="text-2xl text-center text-red-900 dark:text-red-400">
        Essa ação nao pode ser desfeita!
      </p>
      <div className="flex self-end gap-x-2">
        <button
          type="button"
          className="w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-chetwode-blue-200 text-chetwode-blue-950 border-chetwode-blue-600 duration-300 ease-in-out hover:bg-chetwode-blue-300 active:bg-chetwode-blue-500 active:text-chetwode-blue-100"
          onClick={handleCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-red-200 text-red-950 border-red-600 duration-300 ease-in-out hover:bg-red-300 active:bg-red-500 active:text-red-100"
          onClick={() => handleDelete()}
        >
          Deletar{" "}
          {type === "all" || type === "group" ? "Transações" : "Transação"}
        </button>
      </div>
    </div>
  );
}
