interface GoalProps {
  title: string;
  description: string;
  date: Date;
}

export const Goal = ({ title, description, date }: GoalProps) => {
  return (
    <div className="mb-2 px-4 py-2 bg-slate-300 border rounded-[5px]">
      <h1 className="mb-1 text-lg font-bold">{title}</h1>
      <p className="mb-2 text-sm text-slate-500">{date.toISOString()}</p>
      <p className="mb-2">{description}</p>
    </div>
  );
};
