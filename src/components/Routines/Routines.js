import { useState } from "react";
import { callApi } from "../../api";
import RoutineSingle from "./RoutineSingle";
import EditRoutine from "./EditRoutine";
import Modal from "../Modal";

const Routines = ({ routines, user, token, fetch }) => {
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
          <RoutineSingle
            key={routine.id}
            user={user}
            routine={routine}
            setShowEdit={setShowEdit}
            setEditRoutine={setEditRoutine}
          />
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

export default Routines;
