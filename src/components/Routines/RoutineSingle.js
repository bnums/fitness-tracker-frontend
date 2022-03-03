import RoutineActivity from "./RoutineActivity";

const RoutineSingle = ({ routine, user }) => {
  return (
    <div key={routine.id} className="routine-card">
      <div id="routine-name">{routine.name}</div>
      <div id="routine-creator">Created By: {routine.creatorName} </div>
      <div id="routine-goal">Goal: {routine.goal}</div>
      <div id="routine-activities">
        Activities:
        {routine.activities
          ? routine.activities.map((activity) => {
              return <RoutineActivity activity={activity} />;
            })
          : null}
      </div>
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
