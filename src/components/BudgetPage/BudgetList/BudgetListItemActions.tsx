import BudgetListItemButton from "./BudgetListItemButton";

interface IBudgetListItemActionsProps {
  id: number;
  open: boolean;
}

export default function BudgetListItemActions({ id, open }:IBudgetListItemActionsProps) {
  return (
    <section
      className={`min-h-0 h-0 w-9/10 rounded-b-lg duration-300 ease-in-out group-hover:h-12 ${open && "h-12"}`}
    >
      <BudgetListItemButton id={id} open={open}/>
    </section>
  );
}
