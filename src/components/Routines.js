const Routines = ({ routines }) => {
  return (
    <div>
      <h1>Routines Page</h1>
      {routines.map((routine) => {
        return (
          <div key={routine.id}>
            {routine.name} {routine.goal}
          </div>
        );
      })}
    </div>
  );
};

export default Routines;
