import { callApi } from "../api";
import { useState } from "react";
import "./EditActivity.css";

const EditActivity = ({ activity, token, setErrMsg }) => {
  const [newActivity, setNewActivity] = useState(activity);
  const handleEdit = async (e) => {
    e.preventDefault();
    console.log(newActivity);
    try {
      await callApi({
        url: `/activities/${activity.id}`,
        method: `PATCH`,
        body: newActivity,
        token,
      });
    } catch (error) {
      setErrMsg(error.message);
    }
  };

  return (
    <form onSubmit={handleEdit}>
      <label>
        <div className='edit-activity-label'>Activity Name:</div>
        <input
          className='edit-activity-input'
          value={newActivity.name}
          onChange={(e) => {
            setNewActivity({ ...newActivity, name: e.target.value });
          }}
        />
      </label>
      <label>
        <div className='edit-activity-label'>Description:</div>
        <input
          className='edit-activity-input'
          value={newActivity.description}
          onChange={(e) => {
            setNewActivity({ ...newActivity, description: e.target.value });
          }}
        />
      </label>

      <button className='edit-activity-save-button'>Save</button>
    </form>
  );
};

export default EditActivity;
