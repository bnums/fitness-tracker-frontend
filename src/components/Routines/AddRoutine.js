const AddRoutine = ({ routine, setRoutine, errMsg }) => {
  return (
    <>
      <p aria-live="assertive">{errMsg}</p>
      <form className="routine-form">
        <label>
          Name:
          <input
            value={routine.name}
            onChange={(e) => {
              setRoutine({ ...routine, name: e.target.value });
            }}
          />
        </label>
        <label>
          Goal:
          <input
            value={routine.goal}
            onChange={(e) => {
              setRoutine({ ...routine, goal: e.target.value });
            }}
          />
        </label>
        <label>
          Public?
          <input
            type="radio"
            name="isPublic"
            onClick={() => {
              setRoutine({ ...routine, isPublic: true });
            }}
          />
          Yes
          <input
            type="radio"
            name="isPublic"
            defaultChecked
            onClick={() => {
              setRoutine({ ...routine, isPublic: false });
            }}
          />
          No
        </label>
      </form>
    </>
  );
};

export default AddRoutine;
