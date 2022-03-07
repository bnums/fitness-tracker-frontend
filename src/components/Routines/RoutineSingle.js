import RoutineActivity from "./RoutineActivity";
import { useNavigate } from "react-router";
import "./RoutineSingle.css";

const RoutineSingle = ({
  routine,
  editable,
  setShowForm,
  setEditFields,
  setMethod,
  setType,
}) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    setShowForm(true);
    setMethod("patch");
    setEditFields({
      routineId: routine.id,
      name: routine.name,
      goal: routine.goal,
      isPublic: routine.isPublic,
    });
  };

  const handleRoutineActivity = () => {
    setShowForm(true);
    setType("activity");
    setMethod("post");
    setEditFields({
      routineId: routine.id,
      goal: routine.goal,
      isPublic: routine.isPublic,
    });
  };

  return (
    <>
      <div className="routine-card">
        <div className="routine-name">{routine.name}</div>
        <div
          className="username"
          onClick={() => navigate(`/routines/all/${routine.creatorName}`)}
        >
          Created by {routine.creatorName}
        </div>
        <div className="description">Goal: {routine.goal}</div>
        {routine.activities && routine.activities.length
          ? routine.activities.map((activity) => {
              return (
                <RoutineActivity
                  key={activity.id}
                  activity={activity}
                  editable={editable}
                  setShowForm={setShowForm}
                  setEditFields={setEditFields}
                  setType={setType}
                />
              );
            })
          : null}
        {editable ? (
          <section>
            <button
              className="add-routine-activity"
              onClick={handleRoutineActivity}
            >
              Add A Routine Activity +
            </button>
            <div className="buttons-container">
              <button
                className="edit-activity-card-button"
                onClick={handleEdit}
              >
                Edit
              </button>
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
};

export default RoutineSingle;
