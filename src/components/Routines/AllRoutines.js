import Modal from "../Modal";
import EditRoutine from "./EditRoutine";
import { useState } from "react";
import { callApi } from "../../api";

const AllRoutines = ({ routines, user, token, fetch }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [editRoutine, setEditRoutine] = useState({});
  const [errMsg, setErrMsg] = useState("");

  const handleEdit = async () => {
    try {
      console.log(editRoutine);
      await callApi({
        url: `/routines/${editRoutine.id}`,
        method: "patch",
        body: editRoutine,
        token,
      });
      setShowEdit(false);
      fetch();
    } catch (error) {
      setErrMsg(error.message);
    }
  };

  return (
    <div className="routines-cards">
      {routines.map((routine) => {
        return (
          <div key={routine.id} className="routine-card">
            <button
              id="routine-name"
              onClick={() => {
                console.log("WIP");
              }}
            >
              {routine.name}
            </button>
            <div id="routine-creator">Created By: {routine.creatorName} </div>
            <div id="routine-goal">Goal: {routine.goal}</div>
            <div id="routine-activities">
              Activities: {routine.activities.length}
            </div>
            {user === routine.creatorName ? (
              <button
                className="edit-activity-card-button"
                onClick={() => {
                  setShowEdit(true);
                  setEditRoutine({
                    id: routine.id,
                    name: routine.name,
                    goal: routine.goal,
                    isPublic: routine.isPublic,
                  });
                }}
              >
                Edit
              </button>
            ) : null}
          </div>
        );
      })}
      <Modal
        show={showEdit}
        title={editRoutine.name}
        onSubmit={handleEdit}
        onClose={() => setShowEdit(false)}
      >
        <EditRoutine
          editRoutine={editRoutine}
          setEditRoutine={setEditRoutine}
          errMsg={errMsg}
        />
      </Modal>
    </div>
  );
};

export default AllRoutines;
