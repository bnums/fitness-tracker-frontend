// import React, { useState } from "react";
import AddActivity from "./AddActivity";
import EditActivity from "./EditActivity";
import "./Activities.css";
import { useEffect, useState } from "react";

const Activities = ({ activities, token, fetchActivities }) => {
  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    fetchActivities();
  }, [activities, fetchActivities]);

  return (
    <>
      <h1 className="activities-header">Activities</h1>
      <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
        {errMsg}
      </p>
      <div>
        {token ? <AddActivity token={token} setErrMsg={setErrMsg} /> : null}
      </div>
      <div className="activities-cards">
        {activities.map((activity) => {
          return (
            <div className="activity-card" key={activity.id}>
              <div className="activity-name">{activity.name}</div>
              <div className="activity-description">{activity.description}</div>
              <EditActivity
                activity={activity}
                setErrMsg={setErrMsg}
                token={token}
              />
              <button
                className="edit-activity-card-button"
                onClick={() => console.log("working")}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Activities;
