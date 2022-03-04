import Routines from "./Routines";
import "./Routines.css";
const PublicRoutines = ({ routines, user, token, fetchPublicRoutines }) => {
  return (
    <div>
      <header>
        <h1 className="routines-header">Routines</h1>
      </header>
      <Routines
        routines={routines}
        user={user}
        token={token}
        fetch={fetchPublicRoutines}
      />
    </div>
  );
};

export default PublicRoutines;
