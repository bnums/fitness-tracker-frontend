import RoutineSingle from "./RoutineSingle";
import "./Routines.css";

const Routines = ({ routines }) => {
  return (
    <div>
      <div className='routines-header'>Routines</div>
      <div className='routines-cards'>
        {routines.map((routine) => {
          return <RoutineSingle key={routine.id} routine={routine} />;
        })}
      </div>
    </div>
  );
};

export default Routines;
