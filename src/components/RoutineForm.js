const RoutineForm = ({ handleAdd, routine, setRoutine }) => {
  function testHandle(e) {
    e.preventDefault();
    console.log(routine);
  }
  return (
    <form className="routine-form" onSubmit={testHandle}>
      <label>
        Name:
        <input
          value={routine.name}
          placeholder="Routine Name"
          onChange={(e) => {
            setRoutine({ ...routine, name: e.target.value });
          }}
        />
      </label>
      <label>
        Goal:
        <input
          value={routine.goal}
          placeholder="Goal"
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
      <button>Add New Routine</button>
    </form>
  );
};

export default RoutineForm;
