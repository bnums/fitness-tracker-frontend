import Routines from "./Routines";
import "./Routines.css";
const PublicRoutines = ({ routines, user, token, fetchPublicRoutines }) => {
  return (
    <div>
      <header>
        <div className='routines-header'>Routines</div>
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
