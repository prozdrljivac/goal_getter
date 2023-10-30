import { type FC, type ReactNode } from "react";

interface GoalProps {
  title: string;
  children: ReactNode;
  date: Date;
}

export const Goal: FC<GoalProps> = ({ title, date, children }) => {
  return (
    <article className="mb-2 px-4 py-2 bg-slate-300 border rounded-[5px]">
      <div>
        <h1 className="mb-1 text-lg font-bold">{title}</h1>
        <p className="mb-2 text-sm text-slate-500">{date.toISOString()}</p>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};
