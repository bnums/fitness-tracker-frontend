import React, { useState } from "react";
import { callApi } from "../../api";
import AddRoutineActivityForm from "./AddRoutineActivityForm";
import "./RoutineForm.css";

const RoutineForm = ({ token, routine, setShow, method }) => {
  const blankRoutine = { name: "", goal: "", isPublic: false };
  const [routineFields, setRoutineFields] = useState(
    Object.keys(routine).length !== 0 ? routine : blankRoutine
  );
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!routineFields.name || !routineFields.goal) {
      setErrMsg("Routines must have a name and goal!");
      return;
    }
    try {
      await callApi({
        url: method === "post" ? `/routines` : `/routines/${routine.id}`,
        method: method,
        body: routineFields,
        token,
      });
      setShow(false);
      setErrMsg("");
      setRoutineFields(blankRoutine);
    } catch (error) {
      setErrMsg(error.message);
    }
  };

  return (
    <>
      <p aria-live="assertive">{errMsg}</p>

      <form className="routine-form" onSubmit={handleSubmit}>
        <div>
          <label className="name-label">Routine Name:</label>
          <input
            className="name-input"
            value={routineFields.name}
            onChange={(e) => {
              setRoutineFields({ ...routineFields, name: e.target.value });
            }}
          />
        </div>
        <div>
          <label className="goal-label">Goal:</label>
          <input
            className="goal-input"
            value={routineFields.goal}
            onChange={(e) => {
              setRoutineFields({ ...routineFields, goal: e.target.value });
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
          </div>
        </label>
        <button className="routine-form-button">Submit</button>
      </form>
      <AddRoutineActivityForm />
    </>
  );
};

export default RoutineForm;
