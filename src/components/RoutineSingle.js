const RoutineSingle = ({ routine }) => {
  console.log(routine);
  return (
    <div className="routine card">
      <div id="routine-name">Name: {routine.name} </div>
      <div id="routine-goal">Goal: {routine.goal}</div>
      {routine.activities && routine.activities.length
        ? routine.activities.map((activity) => {
            return (
              <div key={activity.id}>
                {activity.name} count: {activity.count} duration:
                {activity.duration}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default RoutineSingle;
