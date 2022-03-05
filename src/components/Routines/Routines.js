import { useState } from "react";
import { callApi } from "../../api";
import RoutineSingle from "./RoutineSingle";
import EditRoutine from "./EditRoutine";
// import DeleteRoutine from "./DeleteRoutine";
import Modal from "../Modal";

const Routines = ({ routines, user, token, fetch, setRoutines }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [editRoutine, setEditRoutine] = useState({});
  const [errMsg, setErrMsg] = useState("");

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
      fetch();
    } catch (error) {
      setErrMsg(error.message);
    }
  };

  return (
    <div className='routines-cards'>
      {routines.map((routine) => {
        return (
          <RoutineSingle
            token={token}
            key={routine.id}
            user={user}
            routine={routine}
            setShowEdit={setShowEdit}
            setEditRoutine={setEditRoutine}
            routines={routines}
            setRoutines={setRoutines}
          />
        );
      })}
      <Modal
        show={showEdit}
        title={editRoutine.name}
        onSubmit={handleEdit}
        onClose={() => {
          setShowEdit(false);
          setErrMsg("");
        }}
      >
        <EditRoutine
          editRoutine={editRoutine}
          setEditRoutine={setEditRoutine}
          errMsg={errMsg}
        />
      </Modal>
      {/* <DeleteRoutine
        onSubmit={handleDelete}
        deleteRoutine={deleteRoutine}
        setDeleteRoutine={setDeleteRoutine}
        errMsg={errMsg}
      /> */}
    </div>
  );
};

export default Routines;
