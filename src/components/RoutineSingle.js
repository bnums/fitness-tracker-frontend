import RoutineActivity from "./RoutineActivity";

const RoutineSingle = ({ routine }) => {
  console.log(routine);
  return (
    <div className="routine card">
      <div id="routine-name">Routine Name: {routine.name} </div>
      <div id="routine-creator">Created By: {routine.creatorName} </div>
      <div id="routine-goal">Goal: {routine.goal}</div>
      {routine.activities && routine.activities.length
        ? routine.activities.map((activity) => {
            return <RoutineActivity key={activity.id} activity={activity} />;
          })
        : null}
    </div>
  );
};

export default RoutineSingle;
