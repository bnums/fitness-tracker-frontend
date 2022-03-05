import RoutineActivity from "./RoutineActivity";
import "./RoutineSingle.css";
import { callApi } from "../../api";

const RoutineSingle = ({
  token,
  user,
  routine,
  setShowForm,
  setEditFields,
  editAccess,
}) => {
  // const handleDelete = async () => {
  //   try {
  //     await callApi({
  //       url: `/routines/${routine.id}`,
  //       method: "delete",
  //       token,
  //     });
  //     const filterRoutines = routines.filter((elem) => elem.id !== routine.id);
  //     setRoutines(filterRoutines);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };
  return (
    <>
      <div className="routine-card">
        <div className="routine-name">{routine.name}</div>
        <div className="username">Created by {routine.creatorName}</div>
        <div className="description">Goal: {routine.goal}</div>
        {routine.activities && routine.activities.length
          ? routine.activities.map((activity) => {
              return <RoutineActivity key={activity.id} activity={activity} />;
            })
          : null}
        {editAccess ? null : (
          <div className="buttons-container">
            {user === routine.creatorName ? (
              <button
                className="edit-activity-card-button"
                onClick={() => {
                  setShowForm(true);
                  setEditFields({
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
                className="delete-routine-card-button"
                // onClick={handleDelete}
              >
                Delete
              </button>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
};

export default RoutineSingle;
