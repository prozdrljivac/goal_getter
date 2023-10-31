import { type FC, type ReactNode } from "react";

interface GoalProps {
  id: number;
  title: string;
  children: ReactNode;
  date: Date;
  onDelete: (id: number) => void;
}

export const Goal: FC<GoalProps> = ({
  id,
  title,
  date,
  children,
  onDelete,
}) => {
  return (
    <article className="mb-2 px-4 py-2 bg-slate-300 border rounded-[5px]">
      <div className="flex justify-between">
        <h1 className="mb-1 text-lg font-bold">{title}</h1>
        <button className="text-red-500" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
      <p className="mb-2 text-sm text-slate-500">
        {date.toISOString().split("T")[0]}
      </p>
      {children}
    </article>
  );
};
