const EditRoutine = ({ editRoutine, setEditRoutine, errMsg }) => {
  return (
    <>
      <p aria-live="assertive">{errMsg}</p>
      <form className="routine-form">
        <label>
          Name:
          <input
            value={editRoutine.name}
            onChange={(e) => {
              setEditRoutine({ ...editRoutine, name: e.target.value });
            }}
          />
        </label>
        <label>
          Goal:
          <input
            value={editRoutine.goal}
            onChange={(e) => {
              setEditRoutine({ ...editRoutine, goal: e.target.value });
            }}
          />
        </label>
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
            defaultChecked
            onClick={() => {
              setEditRoutine({ ...editRoutine, isPublic: false });
            }}
          />
          No
        </label>
      </form>
    </>
  );
};

export default EditRoutine;
