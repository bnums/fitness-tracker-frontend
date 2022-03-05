import { useState } from "react";
import { callApi } from "../../api";
import RoutineActivity from "./RoutineActivity";
import Modal from "../Modal";
import EditRoutineForm from "./EditRoutineForm";
import "./RoutineSingle.css";

const RoutineSingle = ({ user, routine, token }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [editRoutine, setEditRoutine] = useState({});

  const handleEdit = async () => {
    try {
      if (!editRoutine.name || !editRoutine.goal) {
        throw new Error("Routines must have a name and goal!");
      }
      await callApi({
        url: `/routines/${editRoutine.id}`,
        method: "patch",
        body: editRoutine,
        token,
      });
      setShowEdit(false);
    } catch (error) {
      setErrMsg(error.message);
    }
  };

  return (
    <>
      <div className='routine-card'>
        <div className='routine-name'>{routine.name}</div>
        <div className='username'>Created by {routine.creatorName}</div>
        <div className='description'>Goal: {routine.goal}</div>
        {routine.activities && routine.activities.length
          ? routine.activities.map((activity) => {
              return <RoutineActivity key={activity.id} activity={activity} />;
            })
          : null}
        <div className='buttons-container'>
          {user === routine.creatorName ? (
            <button
              className='edit-activity-card-button'
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
          {user === routine.creatorName ? (
            <button
              className='delete-routine-card-button'
              onClick={() => {
                console.log("deleted");
              }}
            >
              Delete
            </button>
          ) : null}
        </div>
      </div>
      <Modal
        show={showEdit}
        title={editRoutine.name}
        onSubmit={handleEdit}
        onClose={() => {
          setShowEdit(false);
          setErrMsg("");
        }}
      >
        <EditRoutineForm
          editRoutine={editRoutine}
          setEditRoutine={setEditRoutine}
          errMsg={errMsg}
        />
      </Modal>
    </>
  );
};

export default RoutineSingle;
