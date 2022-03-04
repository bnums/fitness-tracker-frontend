// import AllRoutines from "./AllRoutines";
import { useEffect, useState } from "react";
import { callApi } from "../../api";
import AllRoutines from "./AllRoutines";
const UserRoutines = ({ token, user }) => {
  const [userRoutines, setUserRoutines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchUserRoutines = async () => {
    try {
      const data = await callApi({ url: `/routines/${user}`, token });
      setIsLoading(false);
      setUserRoutines(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserRoutines();
  });

  return (
    <>
      <h1 className="routines-header">{user}'s Routines</h1>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <AllRoutines routines={userRoutines} user={user} token={token} />
      )}
    </>
  );
};

export default UserRoutines;
