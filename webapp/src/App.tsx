import { useState } from "react";

import { type Goal, type GoalInput as GInput } from "./types";
import { GoalInput, GoalList, InfoBox } from "./components";

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

  let warningBox;

  if (goals.length > 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        Take it slow, we don not want to burn out!
      </InfoBox>
    );
  }

  if (goals.length === 0) {
    warningBox = <InfoBox mode="hint">Let us add some goals!</InfoBox>;
  }

  return (
    <>
      <header className="mx-auto my-8 p-4 w-[500px] bg-[#cbd5e1] border rounded">
        <GoalInput onGoalSave={handleGoalSave} />
        {warningBox}
      </header>
      <main className="m-auto p-4 w-[500px]">
        <GoalList goals={goals} onGoalDelete={handleGoalDelete} />
      </main>
    </>
  );
};
