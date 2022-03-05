/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useQuery } from "react-query";
import { callApi } from "../../api";
import RoutineSingle from "./RoutineSingle";
import AddRoutineForm from "./AddRoutineForm";
import Modal from "../Modal";
import "./UserRoutines.css";

const UserRoutines = ({ token, user, activities }) => {
  const [showAddForm, setShowAddForm] = useState(false);

  const fetchUserRoutines = async () => {
    try {
      return await callApi({ url: `/routines/${user}`, token });
    } catch (error) {
      console.error(error);
    }
  };

  const { data, status } = useQuery("getUserRoutines", fetchUserRoutines);
  const userRoutines = data;

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header>
        <div className="user-routines-welcome">Welcome {user}!</div>
        <div className="user-routines-header">Your Routines</div>
        <button
          className="add-routine-btn"
          onClick={() => setShowAddForm(true)}
        >
          Add A New Routine +
        </button>
      </header>
      <div className="routines-cards">
        {userRoutines ? (
          userRoutines.map((routine) => {
            return (
              <RoutineSingle
                key={routine.id}
                user={user}
                routine={routine}
                token={token}
              />
            );
          })
        ) : (
          <div className="user-routines-header">
            {" "}
            No user routines. Start adding some!
          </div>
        )}
      </div>
      <Modal
        show={showAddForm}
        title={"Add A New Routine"}
        onClose={() => setShowAddForm(false)}
      >
        <AddRoutineForm token={token} setShowAddForm={setShowAddForm} />
      </Modal>
    </>
  );
};

export default UserRoutines;
