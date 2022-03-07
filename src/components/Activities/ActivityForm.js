import { useState } from "react";
import { callApi } from "../../api";
import { useMutation, useQueryClient } from "react-query";
import "./ActivityForm.css";

const ActivityForm = ({ token, activity }) => {
  const [errMsg, setErrMsg] = useState();
  const [fields, setFields] = useState(
    Object.keys(activity).length !== 0 ? activity : {}
  );
  const queryClient = useQueryClient();
  const { mutate } = useMutation(callApi, {
    onSuccess: () => {
      queryClient.invalidateQueries("getUserRoutines");
      queryClient.invalidateQueries("getActivities");
      queryClient.invalidateQueries("getPublicRoutines");
      setErrMsg("");
      setFields({});
    },
    onError: () => {
      setErrMsg("This activity already exists");
    },
  });
  const method = Object.keys(activity).length !== 0 ? "patch" : "post";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      mutate({
        url: method === "post" ? `/activities` : `/activities/${fields.id}`,
        method: method,
        body: fields,
        token,
      });
    } catch (error) {
      setErrMsg(error.message);
    }
  };

  return (
    <form className="activity-form" onSubmit={handleSubmit}>
      <p className="err-msg" aria-live="assertive">
        {errMsg}
      </p>
      <label className="activity-label">Name:</label>
      <input
        className="activity-input"
        value={fields.name}
        required
        onChange={(e) => {
          setFields({ ...fields, name: e.target.value.toLowerCase() });
        }}
      />
      <label className="activity-label">Description:</label>
      <input
        className="activity-input"
        value={fields.description}
        required
        onChange={(e) => {
          setFields({ ...fields, description: e.target.value });
        }}
      />
      <footer className="buttons-container">
        <button className="activity-save-button">Submit</button>
      </footer>
    </form>
  );
};

export default ActivityForm;
