import { useState } from "react";
import { callApi } from "../../api";
import RoutineForm from "./RoutineForm";
const AddRoutine = ({ token, user, setRoutines, setShowAdd }) => {
  const blankRoutine = { name: "", goal: "", isPublic: false };
  const [errMsg, setErrMsg] = useState("");
  const [routine, setRoutine] = useState(blankRoutine);

  const handleAdd = async (e) => {
    e.preventDefault();
    console.log(routine);
    try {
      const data = await callApi({
        url: "/routines",
        method: "post",
        body: routine,
        token,
      });
      console.log(data);
      setShowAdd(false);
      setRoutine(blankRoutine);
    } catch (error) {
      setErrMsg(error.message);
    }
  };
  return (
    <>
      <p aria-live="assertive">{errMsg}</p>
      <RoutineForm
        handleAdd={handleAdd}
        routine={routine}
        setRoutine={setRoutine}
        setErrMsg={setErrMsg}
      />
    </>
  );
};

export default AddRoutine;
