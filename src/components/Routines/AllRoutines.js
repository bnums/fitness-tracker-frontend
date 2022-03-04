const AllRoutines = ({ routines, user }) => {
  return (
    <div className="routines-cards">
      {routines.map((routine) => {
        return (
          <div key={routine.id} className="routine-card">
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
            <div id="routine-activities">
              Activities: {routine.activities.length}
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
      })}
    </div>
  );
};

export default AllRoutines;
