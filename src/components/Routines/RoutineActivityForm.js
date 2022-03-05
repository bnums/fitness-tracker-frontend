import { callApi } from "../../api";
import { useState } from "react";

const RoutineActivityForm = ({ routineId, activities }) => {
  const [activityId, setActivityId] = useState(0);
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);
  return (
    <>
      <div className="add-routine-activity">Add Activity </div>
      <form>
        <label className="activity-name-label">Activity Name:</label>
        <select
          value={activityId}
          onChange={(e) => {
            setActivityId(e.target.value);
          }}
        >
          {activities.map((activity) => {
            return (
              <option value={activity.id} key={activity.id}>
                {activity.name}
              </option>
            );
          })}
        </select>
        <label className="count-label">Count:</label>
        <input
          value={count}
          type="number"
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
        <label className="duration-label">Duration:</label>
        <input
          value={duration}
          type="number"
          onChange={(e) => setDuration(parseInt(e.target.value))}
        />
      </form>
    </>
  );
};

export default RoutineActivityForm;

/*
body {
  activityId
  count
  duration
}
*/
