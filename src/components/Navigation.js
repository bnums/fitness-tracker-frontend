import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav bar">
      <Link to="/">Home</Link>
      <Link to="/routines">Routines</Link>
      <Link to="/activities">Activities</Link>
    </nav>
  );
};

export default Navigation;
