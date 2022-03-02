import AddRoutine from "./AddRoutine";

const UserRoutines = ({ user, token, setRoutines }) => {
  return (
    <div>
      <h1>Welcome {user}!</h1>
      <h2>My Routines</h2>
      <div>
        <AddRoutine token={token} />
      </div>
    </div>
  );
};

export default UserRoutines;
