import RoutineActivity from "./RoutineActivity";

const RoutineSingle = ({ routine, user }) => {
  return (
    <div className="routine-card">
      <div id="routine-name">{routine.name} </div>
      <div id="routine-creator">Created By: {routine.creatorName} </div>
      <div id="routine-goal">Goal: {routine.goal}</div>
      {routine.activities && routine.activities.length
        ? routine.activities.map((activity) => {
            return <RoutineActivity key={activity.id} activity={activity} />;
          })
        : null}
      {user === routine.creatorName ? (
        <button
          className="edit-activity-card-button"
          onClick={() => console.log("working")}
        >
          Edit
        </button>
      ) : null}
    </div>
  );
};

export default RoutineSingle;
