import RoutineActivity from "./RoutineActivity";
import "./RoutineSingle.css";

const RoutineSingle = ({ routine }) => {
  return (
    <div className='routine-card'>
      <div className='routine-name'>{routine.name} </div>
      <div className='username'>Created By {routine.creatorName} </div>
      <div className='description'>{routine.goal}</div>

      {routine.activities && routine.activities.length
        ? routine.activities.map((activity) => {
            return <RoutineActivity key={activity.id} activity={activity} />;
          })
        : null}
      <div className='add-routine-activity'>Add Routine Activity +</div>
    </div>
  );
};

export default RoutineSingle;
