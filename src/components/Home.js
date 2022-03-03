import "./Home.css";

const Home = () => {
  return (
    <div className='home-page'>
      <div className='landing-page-header'>
        Welcome to Worqout Fitness Tracker
      </div>
      <div className='landing-page-subhead'>
        Improve your health and stay on track with any of our existing routines
        or customize your own.
      </div>
      <button className='header-log-in-button'>Log In</button>
      <div className='example-routines'>Squares</div>
    </div>
  );
};

export default Home;
