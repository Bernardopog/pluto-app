import { ITransaction } from "../stores/useTransactionBudgetStore";
import { IBudget } from "../stores/useTransactionBudgetStore";
import { ISavedItem } from "../stores/useVaultStore";

export const INCOMEPLACEHOLDER = 3200;

export const BUDGETPLACEHOLDER: IBudget[] = [
  {
    id: 1,
    name: "Transporte",
    limit: 600,
    color: "#333333",
  },
  {
    id: 2,
    name: "Comida",
    limit: 600,
    color: "#6abf40",
  },
  {
    id: 3,
    name: "Contas/Imposto",
    limit: 600,
    color: "#4095bf",
  },
  {
    id: 4,
    name: "Assinatura Streaming",
    limit: 600,
    color: "#bf4040",
  },
  {
    id: 5,
    name: "Assinatura Jogos",
    limit: 600,
    color: "#bf7740",
  },
  {
    id: 6,
    name: "Dívida",
    limit: 600,
    color: "#4040bf",
  },
  {
    id: 7,
    name: "Outros",
    limit: 600,
    color: "#bf40bf",
  },
];

export const VAULTPLACEHOLDER: ISavedItem[] = [
  {
    id: "1",
    name: "Desconto",
    value: 25,
  },
  {
    id: "2",
    name: "A pé",
    value: 80,
  },
  {
    id: "3",
    name: "Presente",
    value: 100,
  },
  {
    id: "4",
    name: "Encontrado",
    value: 5,
  },
  {
    id: "5",
    name: "Reciclagem",
    value: 10,
  },
  {
    id: "6",
    name: "Renda fixa",
    value: 50,
  },
  {
    id: "7",
    name: "Presente",
    value: 75,
  },
];

export const TRANSACTIONPLACEHOLDER: ITransaction[] = [
  {
    id: 1,
    name: "Café na loja da rua",
    value: -10,
    date: new Date(2025, 3, 28),
    categoryId: 2,
  },
  {
    id: 2,
    name: "Presente recebido de amigo",
    value: 75,
    date: new Date(2025, 3, 29),
    categoryId: 7,
  },
  {
    id: 3,
    name: "Compra de Cosméticos",
    value: -80,
    date: new Date(2025, 3, 29),
    categoryId: 7,
  },
  {
    id: 4,
    name: "Presente para amigo",
    value: -25,
    date: new Date(2025, 3, 30),
    categoryId: 7,
  },
  {
    id: 5,
    name: "Padaria",
    value: -20,
    date: new Date(2025, 4, 1),
    categoryId: 2,
  },
];
