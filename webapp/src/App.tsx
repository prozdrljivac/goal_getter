import { useState } from "react";

import { type Goal, type GoalInput as GInput } from "./types";
import { GoalInput, GoalList } from "./components";

export const App = () => {
  const [goals, setGoals] = useState<Goal[]>([]);

  const handleGoalDelete = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  const handleGoalSave = (goal: GInput) => {
    setGoals((prevGoals) => [
      ...prevGoals,
      {
        ...goal,
        id: Math.floor(Math.random() * 1000),
        date: new Date().toISOString(),
      },
    ]);
  };

  return (
    <>
      <header className="mx-auto my-8 w-[500px] bg-[#cbd5e1] border-black rounded">
        <GoalInput onGoalSave={handleGoalSave} />
      </header>
      <main className="m-auto w-[500px]">
        <GoalList goals={goals} onGoalDelete={handleGoalDelete} />
      </main>
    </>
  );
};
