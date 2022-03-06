/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useQuery } from "react-query";
import { callApi } from "../../api";
import RoutineSingle from "./RoutineSingle";
import RoutineForm from "./RoutineForm";
import useAuth from "../../hooks/useAuth";
import Modal from "../Modal";
import "./UserRoutines.css";
import RoutineActivityForm from "./RoutineActivityForm";

const UserRoutines = ({ activities }) => {
  const {
    auth: { user },
    auth: { token },
  } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [editField, setEditFields] = useState({});
  const [type, setType] = useState("routine");
  const [method, setMethod] = useState("");
  const title = editField.name ? editField.name : "Add A New Routine";

  const fetchUserRoutines = async () => {
    try {
      return await callApi({ url: `/routines/${user}`, token });
    } catch (error) {
      console.error(error);
    }
  };

  const { data, status } = useQuery("getUserRoutines", fetchUserRoutines, {
    cacheTime: 10 * 60 * 1000,
  });
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
          className="add-routine-button"
          onClick={() => {
            setShowForm(true);
            setMethod("post");
          }}
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
                routine={routine}
                token={token}
                setShowForm={setShowForm}
                setType={setType}
                setMethod={setMethod}
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
        title={type === "routine" ? title : "Add A New Routine Activity"}
        onClose={() => {
          setShowForm(false);
          setEditFields("");
          setMethod("");
          setType("routine");
        }}
      >
        {" "}
        {type === "routine" ? (
          <RoutineForm
            token={token}
            setShow={setShowForm}
            editField={editField}
            setEditFields={setEditFields}
            method={method}
          />
        ) : (
          <RoutineActivityForm
            editField={editField}
            activities={activities}
            method={method}
            token={token}
          />
        )}
      </Modal>
    </>
  );
};

export default UserRoutines;
