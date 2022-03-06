import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { callApi } from "../../api";
import "./RoutineForm.css";

const RoutineForm = ({ token, editField, setEditFields, setShow, method }) => {
  const blankRoutine = { name: "", goal: "", isPublic: false };
  const [routineFields, setRoutineFields] = useState(
    Object.keys(editField).length !== 0 ? editField : blankRoutine
  );
  const [errMsg, setErrMsg] = useState("");
  const queryClient = useQueryClient();
  const { mutate } = useMutation(callApi, {
    onSuccess: () => {
      queryClient.invalidateQueries("getUserRoutines");
      setErrMsg("");
      setRoutineFields(blankRoutine);
      setEditFields("");
      setShow(false);
    },
  });

  const handleSubmit = async () => {
    if (!routineFields.name || !routineFields.goal) {
      setErrMsg("Routines must have a name and goal!");
      return;
    }
    try {
      mutate({
        url:
          method === "post"
            ? `/routines`
            : `/routines/${routineFields.routineId}`,
        method: method,
        body: {
          name: routineFields.name,
          goal: routineFields.goal,
          isPublic: routineFields.isPublic,
        },
        token,
      });
    } catch (error) {
      setErrMsg(error.message);
    }
  };

  const handleDelete = () => {
    try {
      mutate({
        url: `/routines/${routineFields.routineId}`,
        method: "delete",
        token,
      });
    } catch (error) {
      setErrMsg(error.message);
    }
  };

  return (
    <>
      <form className="routine-form">
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
        <div className="err-msg">
          <p aria-live="assertive">{errMsg}</p>
        </div>
      </form>
      <footer className="buttons-container">
        {method === "post" ? null : (
          <button className="delete-routine-card-button" onClick={handleDelete}>
            Delete
          </button>
        )}
        <button className="edit-activity-card-button" onClick={handleSubmit}>
          Submit
        </button>
      </footer>
    </>
  );
};

export default RoutineForm;
