// import React, { useState } from "react";
import AddActivity from "./AddActivity";
import EditActivity from "./EditActivity";
import "./Activities.css";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import { callApi } from "../../api";

const Activities = ({ activities, token }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [newActivity, setNewActivity] = useState({});
  const [errMsg, setErrMsg] = useState("");

  const handleEdit = async () => {
    try {
      await callApi({
        url: `/activities/${newActivity.id}`,
        method: `PATCH`,
        body: newActivity,
        token,
      });
    } catch (error) {
      setErrMsg(error.message);
    }
  };

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
              <button
                className="edit-activity-card-button"
                onClick={() => {
                  setShowEdit(true);
                  setNewActivity({
                    id: activity.id,
                    name: activity.name,
                    description: activity.description,
                  });
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
        <Modal
          title={newActivity.name}
          show={showEdit}
          onSubmit={handleEdit}
          onClose={() => {
            setShowEdit(false);
            setErrMsg("");
          }}
        >
          <EditActivity
            newActivity={newActivity}
            setNewActivity={setNewActivity}
            setErrMsg={setErrMsg}
          />
        </Modal>
      </div>
    </>
  );
};

export default Activities;
