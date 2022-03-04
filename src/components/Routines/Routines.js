import AllRoutines from "./AllRoutines";
import "./Routines.css";
const Routines = ({ routines, user, token }) => {
  return (
    <div>
      <h1 className="routines-header">Routines Page</h1>
      <AllRoutines routines={routines} user={user} token={token} />
    </div>
  );
};

export default Routines;
