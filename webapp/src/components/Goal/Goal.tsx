interface GoalProps {
  title: string;
  description: string;
  date: Date;
}

export const Goal = ({ title, description, date }: GoalProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{date.toISOString()}</p>
      <p>{description}</p>
    </div>
  );
};
