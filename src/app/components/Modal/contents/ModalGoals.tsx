"use client";

import { FormEvent, useState } from "react";
import { IGoal, useGoalsStore } from "@/app/stores/useGoalsStore";
import { useModalStore } from "@/app/stores/useModalStore";
import { MdAttachMoney, MdOutlineRocketLaunch } from "react-icons/md";
import Checkbox from "@/app/ui/Checkbox";
import Input from "@/app/ui/Input";
import Radio from "@/app/ui/Radio";
import Divider from "@/app/ui/Divider";
import { useVaultStore } from "@/app/stores/useVaultStore";

export default function ModalGoals() {
  const { createGoal } = useGoalsStore();
  const { toggleModal } = useModalStore();
  const { vaultList } = useVaultStore();

  const [goalName, setGoalName] = useState<string>("");
  const [goalPrice, setGoalPrice] = useState<string>("");
  const [wantDeadline, setWantDeadline] = useState<boolean>(false);
  const [deadline, setDeadline] = useState<string>("");
  const [baseProgress, setBaseProgress] = useState<"balance" | "vault">(
    "balance"
  );
  const [selectedVaultId, setSelectedVaultId] = useState<number | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    let data: IGoal = {
      name: goalName,
      price: Number.isNaN(Number(goalPrice))
        ? Number(goalPrice.replace(",", "."))
        : Number(goalPrice),
      deadline: wantDeadline ? deadline : null,
      progress: baseProgress,
      assignedVault: null,
    };

    if (baseProgress === "vault" && !selectedVaultId) {
      setHasError(true);
      return;
    }
    if (baseProgress === "balance") data = { ...data, assignedVault: null };
    if (baseProgress === "vault")
      data = { ...data, assignedVault: selectedVaultId };

    if (data.name && data.price) {
      createGoal(data);
      toggleModal();
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Input
        state={goalName}
        setState={setGoalName}
        label="Qual seu objetivo?"
        inputType="decorated"
        id="decorated"
        type="text"
        icon={<MdOutlineRocketLaunch />}
        placeholder="Ex: Comprar um videogame novo"
        required={true}
      />
      <Input
        state={goalPrice}
        setState={setGoalPrice}
        label="Quanto custa seu objetivo?"
        inputType="decorated"
        id="price"
        type="number"
        icon={<MdAttachMoney />}
        placeholder="Ex: 2.700,00"
        required={true}
      />
      <span className="mt-2 opacity-50">
        <Divider direction="horizontal" />
      </span>
      <h3 className="subsubtitle">Prazo</h3>
      <div className="flex justify-between mt-1">
        <Checkbox
          label="Deseja adicionar um prazo?"
          state={wantDeadline}
          setState={setWantDeadline}
        />
        <input
          type="date"
          className="px-4 py-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-950 duration-300 ease-in-out disabled:grayscale-75 disabled:opacity-40"
          disabled={!wantDeadline}
          min={new Date().toISOString().split("T")[0]}
          value={deadline}
          onChange={(ev) => setDeadline(ev.target.value)}
        />
      </div>
      <span className="mt-2 opacity-50">
        <Divider direction="horizontal" />
      </span>
      <div>
        <h3 className="subsubtitle inline">Base de Progresso</h3>{" "}
        <span className="text-chetwode-blue-600 inline">*</span>
      </div>
      <div className="flex mt-1 gap-x-2">
        <div
          className={`p-1 border-2  w-full rounded-lg duration-300 ease-in-out ${
            baseProgress === "balance"
              ? "bg-chetwode-blue-300 border-chetwode-blue-600"
              : "bg-chetwode-blue-200 border-transparent"
          }`}
        >
          <Radio
            label="Saldo"
            name="progress"
            id="balance"
            setState={setBaseProgress}
            state={baseProgress === "balance"}
          />
        </div>
        <div
          className={`p-1 border-2  w-full rounded-lg duration-300 ease-in-out ${
            baseProgress === "vault"
              ? "bg-chetwode-blue-300 border-chetwode-blue-600"
              : "bg-chetwode-blue-200 border-transparent"
          }`}
        >
          <Radio
            label="Poupança"
            name="progress"
            id="vault"
            setState={setBaseProgress}
            state={baseProgress === "vault"}
          />
        </div>
      </div>
      {baseProgress === "vault" && (
        <div>
          <h3 className="subsubtitle">
            Selecione o Cofre
            <span className="font-normal text-chetwode-blue-600 inline">*</span>
          </h3>

          <ul className="grid grid-cols-2 md:grid-cols-4 mt-2 gap-2">
            {vaultList.map((vault) => (
              <li key={vault.id}>
                <button
                  type="button"
                  className={`w-full p-2 border-2 rounded-lg font-medium text-chetwode-blue-950 duration-300 ease-in-out ${
                    selectedVaultId === vault.id
                      ? "bg-chetwode-blue-300 hover:bg-chetwode-blue-400 border-chetwode-blue-600"
                      : "bg-chetwode-blue-200 hover:bg-chetwode-blue-300 border-transparent"
                  }`}
                  onClick={() => setSelectedVaultId(vault.id)}
                >
                  {vault.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {hasError && (
        <p className="text-red-600">
          Parece que tem algum erro no formulário, certifique-se de escolher um
          objetivo, um valor e caso tenha marcado poupança escolha o cofre que
          você quer usar como base de progresso.
        </p>
      )}
      <div className="flex self-end gap-x-2">
        <button
          type="button"
          className="w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-chetwode-blue-200 text-chetwode-blue-950 border-chetwode-blue-600 duration-300 ease-in-out hover:bg-chetwode-blue-300 active:bg-chetwode-blue-500 active:text-chetwode-blue-100"
          onClick={() => toggleModal()}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-chetwode-blue-200 text-chetwode-blue-950 border-chetwode-blue-600 duration-300 ease-in-out hover:bg-chetwode-blue-300 active:bg-chetwode-blue-500 active:text-chetwode-blue-100"
        >
          Criar Objetivo
        </button>
      </div>
    </form>
  );
}
