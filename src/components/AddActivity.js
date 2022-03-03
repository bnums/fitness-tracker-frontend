import { useState } from "react";
import { callApi } from "../api";
import ActivityForm from "./ActivityForm";
const AddActivity = ({ token }) => {
  const blankActivity = { name: "", description: "" };
  const [errMsg, setErrMsg] = useState("");
  const [activity, setActivity] = useState(blankActivity);

  const handleAdd = async (e) => {
    e.preventDefault();
    console.log(activity);
    try {
      const data = await callApi({
        url: "/activities",
        method: "post",
        body: activity,
        token,
      });
      console.log(data);
      setActivity(blankActivity);
    } catch (error) {
      setErrMsg(error.message);
    }
  };
  return (
    <>
      <h3>Add Activity</h3>
      <p className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>
        {errMsg}
      </p>
      <ActivityForm
        handleAdd={handleAdd}
        activity={activity}
        setActivity={setActivity}
        setErrMsg={setErrMsg}
      />
    </>
  );
};

export default AddActivity;
