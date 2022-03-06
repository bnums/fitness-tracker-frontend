/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useQuery } from "react-query";
import { callApi } from "../../api";
import RoutineSingle from "./RoutineSingle";
import RoutineForm from "./RoutineForm";
import useAuth from "../../hooks/useAuth";
import Modal from "../Modal";
import "./UserRoutines.css";

const UserRoutines = ({ activities }) => {
  const {
    auth: { user },
    auth: { token },
  } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [editField, setEditFields] = useState({});

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
        <button className="add-routine-btn" onClick={() => setShowForm(true)}>
          Add A New Routine +
        </button>
      </header>
      <div className="routines-cards">
        {userRoutines ? (
          userRoutines.map((routine) => {
            return (
              <RoutineSingle
                key={routine.id}
                routine={routine}
                token={token}
                setShowForm={setShowForm}
                setEditFields={setEditFields}
                editable={true}
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
        show={showForm}
        title={
          Object.keys(editField).length !== 0
            ? editField.name
            : "Add A New Routine"
        }
        onClose={() => {
          setShowForm(false);
          setEditFields("");
        }}
      >
        <RoutineForm
          token={token}
          setShow={setShowForm}
          routine={editField}
          method={Object.keys(editField).length !== 0 ? "patch" : "post"}
          activities={activities}
        />
      </Modal>
    </>
  );
};

export default UserRoutines;
