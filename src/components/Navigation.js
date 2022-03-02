import { Link } from "react-router-dom";

const Navigation = ({ user, setUser, token, setToken }) => {
  return (
    <nav className="nav bar">
      <Link to="/">Worqout</Link>
      {user ? <Link to={`/routines/${user}`}>My Routines</Link> : null}
      <Link to="/routines/public">Routines</Link>
      <Link to="/activities">Activities</Link>
      {token ? (
        <Link
          to="/routines/public"
          onClick={() => {
            setToken("");
            setUser("");
            localStorage.clear();
          }}
        >
          Log Out
        </Link>
      ) : (
        <Link to="/account/login">Sign In/Register</Link>
      )}
    </nav>
  );
};

export default Navigation;
