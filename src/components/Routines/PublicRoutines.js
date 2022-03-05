import RoutineSingle from "./RoutineSingle";
import { useQuery } from "react-query";
import { callApi } from "../../api";
import "./PublicRoutines.css";

const PublicRoutines = ({ user, token }) => {
  const fetchPublicRoutines = async () => {
    try {
      const response = await callApi({ url: "/routines" });
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const { data, status } = useQuery("publicRoutines", fetchPublicRoutines);
  let publicRoutines = data;

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div>
      <header>
        <h1 className="routines-header">Routines</h1>
      </header>
      <div className="routines-cards">
        {publicRoutines.map((routine) => {
          return (
            <RoutineSingle
              key={routine.id}
              user={user}
              routine={routine}
              token={token}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PublicRoutines;
