import { useState } from "react";
import { callApi } from "../../api";
import ActivityForm from "./ActivityForm";
const AddActivity = ({ token, setErrMsg }) => {
  const blankActivity = { name: "", description: "" };
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
