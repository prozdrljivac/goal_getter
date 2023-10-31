import { type FC } from "react";

import { type GoalInput as GInput } from "../../types";

type GoalInputProps = {
  goal: GInput;
};

export const GoalInput: FC<GoalInputProps> = () => {
  return (
    <div className="p-8 flex-col items-start border rounded">
      {/* Add label */}
      <input
        className="mb-4 px-4 py-2 w-full border-black rounded"
        type="text"
      />
      {/* Add label */}
      <textarea className="mb-4 w-full border-black rounded" rows={5} />
      <button className="mb-4 p-4 w-full border-black font-bold rounded bg-[#b2cdd5]">
        Add Goal
      </button>
    </div>
  );
};
