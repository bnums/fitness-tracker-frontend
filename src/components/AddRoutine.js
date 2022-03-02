import { useState } from "react";
import { callApi } from "../api";
import RoutineForm from "./RoutineForm";
const AddRoutine = ({ token, user, setRoutines }) => {
  const blankRoutine = { name: "", goal: "", isPublic: false };
  const [errMsg, setErrMsg] = useState("");
  const [routine, setRoutine] = useState(blankRoutine);

  const handleAdd = (e) => {
    e.preventDefault();
    try {
      const { data } = callApi({
        url: "routines",
        method: "post",
        body: { routine },
        token,
      });
      setRoutine("");
    } catch (error) {
      setErrMsg(error.message);
    }
  };
  return (
    <>
      <h3>AddRoutine</h3>
      {/* <RoutineForm
        handleAdd={handleAdd}
        routine={routine}
        setRoutine={setRoutine}
      /> */}
    </>
  );
};

export default AddRoutine;
