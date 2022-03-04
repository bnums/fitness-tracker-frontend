import AllRoutines from "./AllRoutines";
import "./Routines.css";
const Routines = ({ routines, user, token, fetchPublicRoutines }) => {
  return (
    <div>
      <h1 className="routines-header">Routines Page</h1>
      <AllRoutines
        routines={routines}
        user={user}
        token={token}
        fetch={fetchPublicRoutines}
      />
    </div>
  );
};

export default Routines;
