// import AllRoutines from "./AllRoutines";
import { useEffect, useState } from "react";
import { callApi } from "../../api";
import AllRoutines from "./AllRoutines";
import Modal from "../Modal";
import AddRoutine from "./AddRoutine";
const UserRoutines = ({ token, user }) => {
  const [userRoutines, setUserRoutines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const fetchUserRoutines = async () => {
    try {
      const data = await callApi({ url: `/routines/${user}`, token });
      setIsLoading(false);
      setUserRoutines(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserRoutines();
  });

  return (
    <>
      <h1 className="routines-header">{user}'s Routines</h1>
      <button onClick={() => setShowAdd(true)}>Add A New Routine +</button>
      <Modal
        show={showAdd}
        title={"Add A New Routine"}
        onClose={() => setShowAdd(false)}
      >
        <AddRoutine token={token} setShowAdd={setShowAdd} />
      </Modal>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <AllRoutines routines={userRoutines} user={user} token={token} />
      )}
    </>
  );
};

export default UserRoutines;
