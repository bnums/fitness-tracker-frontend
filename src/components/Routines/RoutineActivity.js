import "./RoutineActivity.css";
import chevronUp from "./img/chevron-up.png";
import chevronDown from "./img/chevron-down.png";

const RoutineActivity = ({ activity }) => {
  return (
<<<<<<< HEAD:src/components/RoutineActivity.js
    <div className='routine-activity'>
      <div className='routine-activity-name-container'>
        <div className='routine-activity-name'>{activity.name}</div>
        <img
          className='chevron-icon'
          src={chevronUp}
          alt='chevron-up'
          onClick={() => {
            return (
              <img
                className='chevron-icon'
                src={chevronDown}
                alt='chevron-down'
              />
            );
          }}
        />
      </div>
      <div
        className='
      routine-activity-content'
      >
        <div className='routine-activity-description'>
          {activity.description}
        </div>
        <div className='routine-activity-count'>Count: {activity.count}</div>
        <div className='routine-activity-duration'>
          Duration: {activity.duration}
        </div>
        <div className='routine-activity-buttons'>
          <button
            className='routine-activity-edit-button'
            onClick={() => console.log("working")}
          >
            Edit
          </button>
          <div className='routine-activity-delete-button'>Delete</div>
        </div>
      </div>
=======
    <div key={activity.id} className="routine-activity">
      <div id="routine-activity-name">{activity.name}</div>
      <div id="routine-activity-description">{activity.description}</div>
      <div id="routine-activity-count">count: {activity.count}</div>
      <div id="routine-activity-duration">duration: {activity.duration}</div>
>>>>>>> my-routines-tab:src/components/Routines/RoutineActivity.js
    </div>
  );
};

export default RoutineActivity;
