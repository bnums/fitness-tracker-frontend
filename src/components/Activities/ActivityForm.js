/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

const ActivityForm = ({ handleAdd, activity, setActivity, setErrMsg }) => {
  useEffect(() => {
    setErrMsg("");
  }, [activity.name, activity.goal]);

  return (
    <form className="" onSubmit={handleAdd}>
      <label>
        Name:
        <input
          value={activity.name}
          required
          onChange={(e) => {
            setActivity({ ...activity, name: e.target.value.toLowerCase() });
            console.log(activity.name);
          }}
        />
      </label>
      <label>
        Description:
        <input
          value={activity.description}
          required
          onChange={(e) => {
            setActivity({ ...activity, description: e.target.value });
          }}
        />
      </label>

      <button>Add New Activity</button>
    </form>
  );
};

export default ActivityForm;
