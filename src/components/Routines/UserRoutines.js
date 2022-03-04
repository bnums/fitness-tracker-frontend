/* eslint-disable react-hooks/exhaustive-deps */
// import AllRoutines from "./AllRoutines";
import { useEffect, useState } from "react";
import { callApi } from "../../api";
import AllRoutines from "./AllRoutines";
import AddRoutine from "./AddRoutine";
import Modal from "../Modal";

const UserRoutines = ({ token, user, activities }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userRoutines, setUserRoutines] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const blankRoutine = { name: "", goal: "", isPublic: false };
  const [routine, setRoutine] = useState(blankRoutine);
  const [errMsg, setErrMsg] = useState("");

  const fetchUserRoutines = async () => {
    try {
      const data = await callApi({ url: `/routines/${user}`, token });
      setIsLoading(false);
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
    } catch (error) {
      setErrMsg(error.message);
    }
  };

  useEffect(() => {
    fetchUserRoutines();
  }, [user]);

  return (
    <>
      <header className="routines-header">
        <h1>{user}'s Routines</h1>
        <button className="add-routine-btn" onClick={() => setShowAdd(true)}>
          Add A New Routine +
        </button>
      </header>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <AllRoutines
          routines={userRoutines}
          user={user}
          token={token}
          routine={routine}
          setRoutine={setRoutine}
          fetch={fetchUserRoutines}
        />
      )}
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
