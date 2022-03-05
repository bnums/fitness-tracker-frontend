import AddRoutineActivity from "./AddRoutineActivityForm";
const EditRoutineForm = ({ editRoutine, setEditRoutine, errMsg }) => {
  return (
    <>
      <p aria-live="assertive">{errMsg}</p>

      <form className="routine-form">
        <h3>Name and Goal:</h3>
        <label>Name:</label>
        <input
          value={editRoutine.name}
          onChange={(e) => {
            setEditRoutine({ ...editRoutine, name: e.target.value });
          }}
        />
        <label>Goal:</label>
        <input
          value={editRoutine.goal}
          onChange={(e) => {
            setEditRoutine({ ...editRoutine, goal: e.target.value });
          }}
        />
        <label>
          Public?
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
        </label>
      </form>
      <AddRoutineActivity />
    </>
  );
};

export default EditRoutineForm;
