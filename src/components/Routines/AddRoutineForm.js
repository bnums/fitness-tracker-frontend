import { useState } from "react";
import { callApi } from "../../api";

const AddRoutineForm = ({ token, setShowAdd }) => {
  const blankRoutine = { name: "", goal: "", isPublic: false };
  const [routineFields, setRoutineFields] = useState(blankRoutine);
  const [errMsg, setErrMsg] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await callApi({
        url: "/routines",
        method: "post",
        body: routineFields,
        token,
      });
      setShowAdd(false);
      setErrMsg("");
      setRoutineFields(blankRoutine);
    } catch (error) {
      setErrMsg(error.message);
    }
  };

  return (
    <>
      <p aria-live="assertive">{errMsg}</p>
      <form className="routine-form" onSubmit={handleAdd}>
        <label>Name:</label>
        <input
          value={routineFields.name}
          onChange={(e) => {
            setRoutineFields({ ...routineFields, name: e.target.value });
          }}
        />
        <label>Goal:</label>
        <input
          value={setRoutineFields.goal}
          onChange={(e) => {
            setRoutineFields({ ...routineFields, goal: e.target.value });
          }}
        />
        <label>
          Public?
          <input
            type="radio"
            name="isPublic"
            onClick={() => {
              setRoutineFields({ ...routineFields, isPublic: true });
            }}
          />
          Yes
          <input
            type="radio"
            name="isPublic"
            defaultChecked
            onClick={() => {
              setRoutineFields({ ...routineFields, isPublic: false });
            }}
          />
          No
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddRoutineForm;
