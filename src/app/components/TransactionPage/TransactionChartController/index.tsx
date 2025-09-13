import { TransactionChartType } from "@/app/(pages)/(private)/transaction/TransactionChartPage";
import Input from "@/app/ui/Input";
import Radio from "@/app/ui/Radio";
import { Dispatch, SetStateAction } from "react";
import { MdCalendarToday } from "react-icons/md";

interface ITransactionChartControllerProps {
  chartType: TransactionChartType;
  setChartType: Dispatch<SetStateAction<TransactionChartType>>;
  passedDays: number;
  setPassedDays: Dispatch<SetStateAction<number>>;
}

export default function TransactionChartController({
  chartType,
  setChartType,
  passedDays,
  setPassedDays,
}: ITransactionChartControllerProps) {
  return (
    <section className="flex flex-col ml-[5%] w-[95%] p-2 rounded-lg bg-chetwode-blue-200 shadow-md">
      <h2 className="subtitle">Controle</h2>
      <div className="flex gap-4">
        <div className="flex-1 p-2 rounded-lg shadow-md bg-chetwode-blue-100">
          <h3 className="subsubtitle">Geral:</h3>
          <Radio
            state={chartType === "all"}
            setState={() => setChartType("all")}
            name="chartType"
            id="chartType"
            label="Geral"
          />
          <Radio
            state={chartType === "income"}
            setState={() => setChartType("income")}
            name="chartType"
            id="chartType"
            label="Receitas"
          />
          <Radio
            state={chartType === "expense"}
            setState={() => setChartType("expense")}
            name="chartType"
            id="chartType"
            label="Despesas"
          />
        </div>
        <div className="flex-1 p-2 rounded-lg shadow-md bg-chetwode-blue-100">
          <h3 className="subsubtitle">Orçamentos:</h3>
          <Radio
            state={chartType === "budget-income"}
            setState={() => setChartType("budget-income")}
            name="chartType"
            id="chartType"
            label="Receita + Orçamento"
          />
          <Radio
            state={chartType === "budget-expense"}
            setState={() => setChartType("budget-expense")}
            name="chartType"
            id="chartType"
            label="Gasto + Orçamento"
          />
        </div>
        <div className="flex-1 p-2 rounded-lg shadow-md bg-chetwode-blue-100">
          <label htmlFor="days">
            <h3 className="subsubtitle">Dias:</h3>
          </label>
          <Input
            type="number"
            inputType="decorated"
            icon={<MdCalendarToday />}
            label=""
            name="days"
            id="days"
            state={passedDays}
            setState={setPassedDays}
            minLimit={4}
            maxLimit={24}
            step="1"
          />
        </div>
      </div>
    </section>
  );
}
