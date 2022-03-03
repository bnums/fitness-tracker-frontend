/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

const RoutineForm = ({ handleAdd, routine, setRoutine, setErrMsg }) => {
  useEffect(() => {
    setErrMsg("");
  }, [routine.name, routine.goal]);

  return (
    <form className="routine-form" onSubmit={handleAdd}>
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
      <button>Add New Routine</button>
    </form>
  );
};

export default RoutineForm;
