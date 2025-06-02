interface IDividerProps {
  direction: "horizontal" | "vertical";
}

export default function Divider({ direction }: IDividerProps) {
  return (
    <div
      className={`${
        direction === "horizontal" ? "h-0.5 w-full" : "h-full w-0.5"
      } rounded-full bg-chetwode-blue-950/50`}
    />
  );
}
