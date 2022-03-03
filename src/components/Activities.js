// import React, { useState } from "react";
import AddActivity from "./AddActivity";
import "./Activities.css";

const Activities = ({ activities, token }) => {
  return (
    <>
      <h1 className='activities-header'>Activities</h1>
      <div>{token ? <AddActivity token={token} /> : null}</div>
      <div className='activities-cards'>
        {activities.map((activity) => {
          return (
            <div className='activity-card' key={activity.id}>
              <div className='activity-name'>{activity.name}</div>
              <div className='activity-description'>{activity.description}</div>
              <button className='edit-activity-card-button'>Edit</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Activities;
