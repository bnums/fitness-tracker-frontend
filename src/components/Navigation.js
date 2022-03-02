import { Link } from "react-router-dom";

const Navigation = ({ token, setToken }) => {
  return (
    <nav className='nav bar'>
      <Link to='/'>Worqout</Link>
      <Link to='/routines'>Routines</Link>
      <Link to='/activities'>Activities</Link>
      {token ? (
        <Link
          to='/routines'
          onClick={() => {
            setToken("");
            localStorage.removeItem("token");
          }}
        >
          Log Out
        </Link>
      ) : (
        <Link to='/account/login'>Sign In/Register</Link>
      )}
    </nav>
  );
};

export default Navigation;
