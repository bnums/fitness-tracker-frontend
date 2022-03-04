const AddRoutine = ({ routine, setRoutine, errMsg }) => {
  return (
    <>
      <p aria-live="assertive">{errMsg}</p>
      <form className="routine-form">
        <label>Name:</label>
        <input
          value={routine.name}
          onChange={(e) => {
            setRoutine({ ...routine, name: e.target.value });
          }}
        />
        <label>Goal:</label>
        <input
          value={routine.goal}
          onChange={(e) => {
            setRoutine({ ...routine, goal: e.target.value });
          }}
        />
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
