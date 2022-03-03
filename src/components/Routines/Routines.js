import "./Routines.css";
import { Outlet } from "react-router";
const Routines = () => {
  return (
    <div>
      <h1 className="routines-header">Routines Page</h1>
      <Outlet />
    </div>
  );
};

export default Routines;
