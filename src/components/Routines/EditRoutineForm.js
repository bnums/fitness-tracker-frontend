import AddRoutineActivity from "./AddRoutineActivityForm";
const EditRoutineForm = ({ editRoutine, setEditRoutine, errMsg }) => {
  return (
    <>
      <p aria-live="assertive">{errMsg}</p>

      <form className="routine-form">
        <div>
          <label className="name-label">Routine Name:</label>
          <input
            className="name-input"
            value={editRoutine.name}
            onChange={(e) => {
              setEditRoutine({ ...editRoutine, name: e.target.value });
            }}
          />
        </div>
        <div>
          <label className="goal-label">Goal:</label>
          <input
            className="goal-input"
            value={editRoutine.goal}
            onChange={(e) => {
              setEditRoutine({ ...editRoutine, goal: e.target.value });
            }}
          />
        </div>
        <label className="public-label-container">
          <div className="public-label">Public?</div>
          <div className="public-input">
            <input
              type="radio"
              name="isPublic"
              onClick={() => {
                setEditRoutine({ ...editRoutine, isPublic: true });
              }}
            />
            Yes
            <input
              type="radio"
              name="isPublic"
              onClick={() => {
                setEditRoutine({ ...editRoutine, isPublic: false });
              }}
            />
            No
          </div>
        </label>
      </form>
      <AddRoutineActivity />
    </>
  );
};

export default EditRoutineForm;
