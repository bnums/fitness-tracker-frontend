import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav bar">
      <Link to="/">Worqout</Link>
      <Link to="/routines">Routines</Link>
      <Link to="/activities">Activities</Link>
      <Link to="/account/login">Sign In/Register</Link>
    </nav>
  );
};

export default Navigation;
