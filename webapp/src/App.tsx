import { useState } from "react";

import dummyGoals from "./utils/dummy-goals.json";
import { type GoalRequest, type GoalInput as GInput } from "./types";
import { GoalList } from "./components/GoalList/GoalList";
import { GoalInput } from "./components/GoalInput/GoalInput";

export const App = () => {
  const [goals, setGoals] = useState<GoalRequest[]>(dummyGoals["data"]);
  const [goal, setGoal] = useState<GInput>({
    title: "",
    description: "",
    date: new Date().toISOString(),
  });

  const handleGoalDelete = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <>
      <header className="mx-auto my-8 w-[500px] bg-[#cbd5e1] border-black rounded">
        <GoalInput goal={goal} />
      </header>
      <main className="m-auto w-[500px]">
        <GoalList goals={goals} onGoalDelete={handleGoalDelete} />
      </main>
    </>
  );
};

export default App;
