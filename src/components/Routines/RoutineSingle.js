// import RoutineActivity from "./RoutineActivity";
const RoutineSingle = ({ user, routine, setShowEdit, setEditRoutine }) => {
  return (
    <>
      <div className="routine-card">
        <button
          id="routine-name"
          onClick={() => {
            console.log("WIP");
          }}
        >
          {routine.name}
        </button>
        <div id="routine-creator">Created By: {routine.creatorName} </div>
        <div id="routine-goal">Goal: {routine.goal}</div>
        <div id="routine-activities">Activities:</div>
        {user === routine.creatorName ? (
          <button
            className="edit-activity-card-button"
            onClick={() => {
              setShowEdit(true);
              setEditRoutine({
                id: routine.id,
                name: routine.name,
                goal: routine.goal,
                isPublic: routine.isPublic,
              });
            }}
          >
            Edit
          </button>
        ) : null}
      </div>
    </>
  );
};

export default RoutineSingle;
