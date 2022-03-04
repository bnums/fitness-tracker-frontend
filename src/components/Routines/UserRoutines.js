/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { callApi } from "../../api";
import Routines from "./Routines";
import AddRoutine from "./AddRoutine";
import Modal from "../Modal";
import "./UserRoutines.css";

const UserRoutines = ({ token, user, activities }) => {
  const [userRoutines, setUserRoutines] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const blankRoutine = { name: "", goal: "", isPublic: false };
  const [routine, setRoutine] = useState(blankRoutine);
  const [errMsg, setErrMsg] = useState("");

  const fetchUserRoutines = async () => {
    try {
      const data = await callApi({ url: `/routines/${user}`, token });
      setUserRoutines(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = async () => {
    try {
      await callApi({
        url: "/routines",
        method: "post",
        body: routine,
        token,
      });
      setShowAdd(false);
      setErrMsg("");
      setRoutine(blankRoutine);
      fetchUserRoutines();
    } catch (error) {
      setErrMsg(error.message);
    }
  };

  useEffect(() => {
    fetchUserRoutines();
  });

  return (
    <>
      <header>
        <div className="user-routines-welcome">Welcome {user}!</div>
        <div className="user-routines-header">Your Routines</div>
        <button className="add-routine-btn" onClick={() => setShowAdd(true)}>
          Add A New Routine +
        </button>
      </header>
      {userRoutines ? (
        <Routines
          routines={userRoutines}
          activities={activities}
          user={user}
          token={token}
          fetch={fetchUserRoutines}
        />
      ) : null}
      <Modal
        show={showAdd}
        title={"Add A New Routine"}
        onSubmit={handleAdd}
        onClose={() => setShowAdd(false)}
      >
        <AddRoutine routine={routine} setRoutine={setRoutine} errMsg={errMsg} />
      </Modal>
    </>
  );
};

export default UserRoutines;
