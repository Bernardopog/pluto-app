import { IBudgetItem } from "../stores/useBudgetStore";
import { ITransaction } from "../stores/useTransactionStore";
import { ISavedItem } from "../stores/useVaultStore";

export const INCOMEPLACEHOLDER = 3200;

export const BUDGETPLACEHOLDER: IBudgetItem[] = [
  {
    name: "Transporte",
    value: 80,
    color: "#333333",
  },
  {
    name: "Comida",
    value: 200,
    color: "#6abf40",
  },
  {
    name: "Contas/Imposto",
    value: 300,
    color: "#4095bf",
  },
  {
    name: "Assinatura Streaming",
    value: 120,
    color: "#bf4040",
  },
  {
    name: "Assinatura Jogos",
    value: 24,
    color: "#bf7740",
  },
  {
    name: "Dívida",
    value: 400,
    color: "#4040bf",
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
    id: "1",
    name: "Café na loja da rua",
    value: -10,
    date: new Date(2025, 3, 28),
  },
  {
    id: "2",
    name: "Presente recebido de amigo",
    value: 75,
    date: new Date(2025, 3, 29),
  },
  {
    id: "3",
    name: "Compra de Cosméticos",
    value: -80,
    date: new Date(2025, 3, 29),
  },
  {
    id: "4",
    name: "Presente para amigo",
    value: -25,
    date: new Date(2025, 3, 30),
  },
  {
    id: "5",
    name: "Padaria",
    value: -20,
    date: new Date(2025, 4, 1),
  }
];
