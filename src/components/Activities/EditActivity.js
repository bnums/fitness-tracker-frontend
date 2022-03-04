import { callApi } from "../../api";
import { useState } from "react";

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
    <form className="" onSubmit={handleEdit}>
      <label>
        Name:
        <input
          value={newActivity.name}
          onChange={(e) => {
            setNewActivity({ ...newActivity, name: e.target.value });
          }}
        />
      </label>
      <label>
        Description:
        <input
          value={newActivity.description}
          onChange={(e) => {
            setNewActivity({ ...newActivity, description: e.target.value });
          }}
        />
      </label>

      <button>Save</button>
    </form>
  );
};

export default EditActivity;
