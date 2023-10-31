import { FC } from "react";
import { Goal } from "../Goal/Goal";
import { type GoalRequest } from "../../types";

type GoalListProps = {
  goals: GoalRequest[];
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
