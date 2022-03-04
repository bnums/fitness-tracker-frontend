import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ user, setUser, token, setToken }) => {
  return (
<<<<<<< HEAD
    <nav>
      <div className='nav-bar-desktop'>
        <div className='routes-container'>
          <Link className='home' to='/'>
            Worqout
          </Link>
          {user ? (
            <Link className='my-routines' to={`/routines/${user}`}>
              My Routines
            </Link>
          ) : null}
          <Link className='routines' to='/routines/public'>
            Routines
          </Link>
          <Link className='activities' to='/activities'>
            Activities
          </Link>
        </div>
        {token ? (
          <Link
            className='log-out'
            to='/'
            onClick={() => {
              setToken("");
              setUser("");
              localStorage.clear();
            }}
          >
            Log Out
          </Link>
        ) : (
          <Link className='log-in-register' to='/account/login'>
            Log In/Register
          </Link>
        )}
      </div>

      <div className='nav-bar-mobile'>
        <div>
          <Link className='mobile-home' to='/'>
            Worqout
          </Link>
          <div className='mobile-routes-container'>
            {user ? (
              <Link className='mobile-my-routines' to={`/routines/${user}`}>
                My Routines
              </Link>
            ) : null}
            <Link className='mobile-routines' to='/routines/public'>
              Routines
            </Link>
            <Link className='mobile-activities' to='/activities'>
              Activities
            </Link>
          </div>
        </div>
        {token ? (
          <Link
            className='mobile-log-out'
            to='/'
            onClick={() => {
              setToken("");
              setUser("");
              localStorage.clear();
            }}
          >
            Log Out
          </Link>
        ) : (
          <Link className='mobile-log-in-register' to='/account/login'>
            Log In/Register
          </Link>
        )}
      </div>
=======
    <nav className="nav bar">
      <Link to="/">Worqout</Link>
      {user ? <Link to={`/myroutines/${user}`}>My Routines</Link> : null}
      <Link to="/routines/all">Routines</Link>
      <Link to="/activities">Activities</Link>
      {token ? (
        <Link
          to="/routines/all"
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
>>>>>>> my-routines-tab
    </nav>
  );
};

export default Navigation;
