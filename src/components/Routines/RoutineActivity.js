import { useState } from "react";
import Chevron from "../Chevron";
import "./RoutineActivity.css";

const RoutineActivity = ({ activity, routineActivityId }) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("chevron-icon");
  const toggleAccordian = () => {
    setActive(active === "" ? "active" : "");
    setHeight(active === "active" ? "0px" : `300px`);
    setRotate(active === "active" ? "chevron-icon" : "chevron-icon rotate");
  };

  return (
    <div className="routine-activity-container">
      <button
        className={`routine-activity-toggle ${active}`}
        onClick={toggleAccordian}
      >
        <div className="routine-activity-name">{activity.name}</div>
        <Chevron className={`${rotate}`} width={15} fill={"#777"} />
      </button>
      <div
        style={{ maxHeight: `${height}`, padding: "0px" }}
        className="
      routine-activity-content"
      >
        <div className="routine-activity-description">
          {activity.description}
        </div>
        <div className="routine-activity-count">Count: {activity.count}</div>
        <div className="routine-activity-duration">
          Duration: {activity.duration}
        </div>
        <div className="routine-activity-buttons">
          <button
            className="routine-activity-edit-button"
            onClick={() => console.log(routineActivityId)}
          >
            Edit
          </button>
          <div className="routine-activity-delete-button">Delete</div>
        </div>
      </div>
    </div>
  );
};

export default RoutineActivity;
