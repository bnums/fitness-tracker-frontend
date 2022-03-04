import AddRoutine from "./AddRoutine";
import RoutineSingle from "./RoutineSingle";
import { useEffect, useState } from "react";
import { callApi } from "../api";
import "./UserRoutines.css";

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
      <div className='user-routines-welcome'>Welcome {user}!</div>
      <div className='user-routines-header'>My Routines</div>
      <div>
        <AddRoutine token={token} />
      </div>
      <div className='user-routines-cards'>
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
