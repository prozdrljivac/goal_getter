import { type FC } from "react";
import { Goal } from "../../components";
import { type Goal as TGoal } from "../../types";

type GoalListProps = {
  goals: TGoal[];
  onGoalDelete: (id: number) => void;
};

export const GoalList: FC<GoalListProps> = ({ goals, onGoalDelete }) => {
  return (
    <div>
      {goals.map((goal) => (
        <Goal
          key={goal.id}
          id={goal.id}
          title={goal.title}
          date={new Date(goal.date)}
          onDelete={onGoalDelete}
        >
          <p>{goal.description}</p>
        </Goal>
      ))}
    </div>
  );
};
