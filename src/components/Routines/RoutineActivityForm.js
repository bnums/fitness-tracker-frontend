import { callApi } from "../../api";
import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";

const RoutineActivityForm = ({ routineId, activities }) => {
  const [activityId, setActivityId] = useState(activities[0].id);
  const [count, setCount] = useState(1);
  const [duration, setDuration] = useState(1);
  const [errMsg, setErrMsg] = useState("");

  const queryClient = useQueryClient();
  const { mutate } = useMutation(callApi, {
    onSuccess: () => {
      queryClient.invalidateQueries("getUserRoutines");
      setErrMsg("Routine Successfully Added!");
    },
    onError: () => {
      setErrMsg("Activity is already on routine");
    },
  });

  const handleAdd = async (e) => {
    e.preventDefault();
    if (count <= 0 || duration <= 0) {
      return setErrMsg("Count and duration must be greater than 0");
    }
    try {
      mutate({
        url: `/routines/${routineId}/activities`,
        method: "post",
        body: {
          activityId: activityId,
          count: count,
          duration: duration,
        },
      });
    } catch (error) {
      setErrMsg("Activity is already on routine");
    }
  };

  return (
    <>
      <form onSubmit={handleAdd}>
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
        <button>+</button>
      </form>
      <div className="err-msg">
        <p aria-live="assertive">{errMsg}</p>
      </div>
    </>
  );
};

export default RoutineActivityForm;
