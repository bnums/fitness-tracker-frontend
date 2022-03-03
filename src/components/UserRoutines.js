import AddRoutine from "./AddRoutine";
import RoutineSingle from "./RoutineSingle";
import { useEffect, useState } from "react";
import { callApi } from "../api";

const UserRoutines = ({ user, token }) => {
  const [userRoutines, setUserRoutines] = useState([]);

  const fetchUserRoutines = async () => {
    try {
      const data = await callApi({ url: `/routines/${user}`, token });
      setUserRoutines(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserRoutines();
  }, []);

  return (
    <div>
      <h1>Welcome {user}!</h1>
      <h2>My Routines</h2>
      <div>
        <AddRoutine token={token} />
      </div>
      <div>
        {userRoutines && userRoutines.length
          ? userRoutines.map((routine) => {
              return <RoutineSingle key={routine.id} routine={routine} />;
            })
          : null}
      </div>
    </div>
  );
};

export default UserRoutines;
