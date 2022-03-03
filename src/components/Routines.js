import RoutineSingle from "./RoutineSingle";

const Routines = ({ routines }) => {
  return (
    <div>
      <h1>Public Routines Page</h1>
      {routines.map((routine) => {
        return <RoutineSingle key={routine.id} routine={routine} />;
      })}
    </div>
  );
};

export default Routines;
