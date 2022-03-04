// import RoutineActivity from "./RoutineActivity";
const RoutineSingle = ({ user, routine, setShowEdit, setEditRoutine }) => {
  return (
    <>
      <div className="routine-card">
        <div className="routine-name">{routine.name}</div>
        <div className="routine-creator">Created By: {routine.creatorName}</div>
        <div className="routine-goal">Goal: {routine.goal}</div>
        <div className="routine-activities">Activities:</div>
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
