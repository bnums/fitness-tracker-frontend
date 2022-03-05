import React from "react";
import { callApi } from "../../api";

const AddRoutineActivityForm = (props) => {
  const fetchActivities = async () => {
    try {
      const response = await callApi({ url: "/activities" });
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  // const { data, status } = useQuery("getActivities", fetchActivities);
  // let activities = data;
  // console.log(props.routineId);
  return <div className="add-routine-activity">Add Routine Activity +</div>;
};

export default AddRoutineActivityForm;
