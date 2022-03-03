import RoutineSingle from "./RoutineSingle";
import "./Routines.css";

const Routines = ({ routines }) => {
  return (
    <div>
      <h1 className="routines-header">Public Routines Page</h1>
      <div className="routines-cards">
        {routines.map((routine) => {
          return <RoutineSingle key={routine.id} routine={routine} />;
        })}
      </div>
    </div>
  );
};

export default Routines;
