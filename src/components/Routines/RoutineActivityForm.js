import { callApi } from "../../api";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

const RoutineActivityForm = ({ editField, activities, token }) => {
  const [activityId, setActivityId] = useState(
    editField.activityId ? editField.activityId : activities[0].id
  );
  const [count, setCount] = useState(editField.count ? editField.count : 1);
  const [duration, setDuration] = useState(
    editField.duration ? editField.duration : 1
  );
  const [errMsg, setErrMsg] = useState("");
  const method = editField.routineActivityId ? "patch" : "post";

  const queryClient = useQueryClient();
  const { mutate } = useMutation(callApi, {
    onSuccess: () => {
      queryClient.invalidateQueries("getUserRoutines");
      method === "post"
        ? setErrMsg("Routine successfully Added!")
        : setErrMsg("Routine successfully Updated!");
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
        url:
          method === "post"
            ? `/routines/${editField.routineId}/activities`
            : `/routine_activities/${editField.routineActivityId}`,
        method: method,
        body: {
          activityId: activityId,
          count: count,
          duration: duration,
        },
        token,
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
