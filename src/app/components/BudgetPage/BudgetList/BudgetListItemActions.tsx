import BudgetListItemButton from "./BudgetListItemButton";

export default function BudgetListItemActions({ id }: { id: number }) {
  return (
    <section
      className={`min-h-0 h-0 w-9/10 rounded-b-lg duration-300 ease-in-out group-hover:h-12`}
    >
      <BudgetListItemButton id={id} />
    </section>
  );
}
