"use client";

import { FormEvent, useState } from "react";
import { IGoal, useGoalsStore } from "@/app/stores/useGoalsStore";
import { useModalStore } from "@/app/stores/useModalStore";
import { MdAttachMoney, MdOutlineRocketLaunch } from "react-icons/md";
import Checkbox from "@/app/ui/Checkbox";
import Input from "@/app/ui/Input";
import Radio from "@/app/ui/Radio";
import Divider from "@/app/ui/Divider";

export default function ModalGoals() {
  const { createGoal } = useGoalsStore();
  const { toggleModal } = useModalStore();

  const [goalName, setGoalName] = useState<string>("");
  const [goalPrice, setGoalPrice] = useState<string>("");
  const [wantDeadline, setWantDeadline] = useState<boolean>(false);
  const [deadline, setDeadline] = useState<string>("");
  const [baseProgress, setBaseProgress] = useState<"balance" | "vault">(
    "balance"
  );

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    const data: IGoal = {
      name: goalName,
      price: Number.isNaN(Number(goalPrice))
        ? Number(goalPrice.replace(",", "."))
        : Number(goalPrice),
      deadline: wantDeadline ? deadline : null,
      progress: baseProgress,
    };

    if (data.name && data.price) {
      createGoal(data);
      toggleModal();
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
