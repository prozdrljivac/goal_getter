import { type FC, useState, ChangeEvent } from "react";

import { type GoalInput as GInput } from "../../types";

type GoalInputProps = {
  onGoalSave: (goal: GInput) => void;
};

export const GoalInput: FC<GoalInputProps> = ({ onGoalSave }) => {
  const [goal, setGoal] = useState<GInput>({ title: "", description: "" });

  const handleGoalChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setGoal((prevGoal) => ({
      ...prevGoal,
      [name]: value,
    }));
  };

  return (
    <div className="p-8 flex-col items-start border rounded">
      <label className="mb-4 font-bold">Title</label>
      <input
        name="title"
        className="mb-4 px-4 py-2 w-full border-black rounded"
        type="text"
        value={goal.title}
        onChange={handleGoalChange}
      />
      <label className="mb-4 font-bold">Description</label>
      <textarea
        name="description"
        className="mb-4 px-4 py-2 w-full border-black rounded"
        rows={5}
        value={goal.description}
        onChange={handleGoalChange}
      />
      <button
        className="mb-4 p-4 w-full border-black font-bold rounded bg-[#b2cdd5]"
        onClick={() => onGoalSave(goal)}
      >
        Add Goal
      </button>
    </div>
  );
};
