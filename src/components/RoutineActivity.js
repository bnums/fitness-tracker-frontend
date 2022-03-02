const RoutineActivity = ({ activity }) => {
  return (
    <div className="routine-activity">
      <div id="routine-activity-name">{activity.name}</div>
      <div id="routine-activity-count">count: {activity.count}</div>
      <div id="routine-activity-duration">duration: {activity.duration}</div>
    </div>
  );
};

export default RoutineActivity;
