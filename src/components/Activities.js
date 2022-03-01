import React, { useEffect, useState } from "react";
import { callApi } from "../api";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  const fetchActivities = async () => {
    const data = await callApi({ url: "/activities" });
    setActivities(data);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <>
      <h1>Activities Page</h1>
      {activities.map((activity) => {
        return (
          <div key={activity.id}>
            {activity.name} {activity.description}
          </div>
        );
      })}
    </>
  );
};

export default Activities;
