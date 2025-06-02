import { IBudgetItem } from "../stores/useBudgetStore";
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
