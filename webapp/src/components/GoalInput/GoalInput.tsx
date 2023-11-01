import { type FC, useRef, FormEvent } from "react";

import { type GoalInput as GInput } from "../../types";

type GoalInputProps = {
  onGoalSave: (goal: GInput) => void;
};

export const GoalInput: FC<GoalInputProps> = ({ onGoalSave }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleGoalSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!titleRef.current || !descriptionRef.current) {
      return;
    }

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    if (!title || !description) {
      return;
    }

    e.currentTarget.reset();
    onGoalSave({ title, description });
  };

  return (
    <form className="flex-col items-start" onSubmit={handleGoalSubmit}>
      <label className="mb-4 font-bold" htmlFor="title">
        Title
      </label>
      <input
        id="title"
        name="title"
        className="mb-4 px-4 py-2 w-full border-black rounded"
        type="text"
        ref={titleRef}
      />
      <label className="mb-4 font-bold" htmlFor="description">
        Description
      </label>
      <textarea
        id="description"
        name="description"
        className="mb-4 px-4 py-2 w-full border-black rounded"
        rows={5}
        ref={descriptionRef}
      />
      <button
        className="mb-4 p-4 w-full border-black font-bold rounded bg-[#b2cdd5]"
        type="submit"
      >
        Add Goal
      </button>
    </form>
  );
};
