import RoutineActivity from "./RoutineActivity";
import "./RoutineSingle.css";
const RoutineSingle = ({ user, routine, setShowEdit, setEditRoutine }) => {
  return (
    <>
      <div className='routine-card'>
        <div className='routine-name'>{routine.name}</div>
        <div className='username'>Created by {routine.creatorName}</div>
        <div className='description'>Goal: {routine.goal}</div>
        {routine.activities && routine.activities.length
          ? routine.activities.map((activity) => {
              return <RoutineActivity key={activity.id} activity={activity} />;
            })
          : null}
        <div className='buttons-container'>
          {user === routine.creatorName ? (
            <button
              className='edit-activity-card-button'
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
          {user === routine.creatorName ? (
            <button
              className='delete-routine-card-button'
              onClick={() => {
                console.log("deleted");
              }}
            >
              Delete
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default RoutineSingle;
