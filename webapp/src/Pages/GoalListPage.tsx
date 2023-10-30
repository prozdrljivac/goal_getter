import { Goal } from "../components";
import goals from "../utils/dummy-goals.json";

export const GoalListPage = () => {
  return (
    <>
      <header className="m-auto w-[500px]">Add Goal Input</header>
      <main>
        <div className="m-auto w-[500px]">
          {goals.data.map((goal) => (
            <Goal key={goal.id} title={goal.title} date={new Date(goal.date)}>
              <p>{goal.description}</p>
            </Goal>
          ))}
        </div>
      </main>
    </>
  );
};
