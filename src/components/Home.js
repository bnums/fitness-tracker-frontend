import "./Home.css";
import pr1 from "./img/pr1.png";
import pr2 from "./img/pr2.png";
import pr3 from "./img/pr3.png";
import { Link } from "react-router-dom";

const Home = ({ token }) => {
  return (
    <>
      <div className="header-content">
        <div className="landing-page-header">
          Personalize Fitness in a Heartbeat
        </div>
        <div className="landing-page-subhead">
          Worqout allows you to easily customize fitness routines to fit your
          needs. Not sure where to start? Select and edit any of our existing
          routines and activities to help you reach your fitness goals.
        </div>
        {token ? null : (
          <Link to="/account/register">
            {" "}
            <button className="header-sign-up-button">Sign Up</button>
          </Link>
        )}
      </div>
      <div className="popular-worqouts-container">
        <div className="popular-worqouts-header">Popular Worqouts</div>
        <div className="all-popular-worqouts">
          <div className="popular-worqout-card">
            <img
              className="popular-worqout-img"
              src={pr1}
              alt="man-doing-elbow-knee-touches"
            />
            <div className="worqout-copy">
              <div className="popular-worqout-label">Elbow Knee Touches</div>
              <div className="popular-worqout-description">
                Reach your left arm straight out in front of you and your right
                leg straight back. Then bend your arm and leg, bringing them
                into your body until your elbow touches your knee. Repeat with
                the other arm and leg.
              </div>
            </div>
          </div>

          <div className="popular-worqout-card">
            <img
              className="popular-worqout-img"
              src={pr2}
              alt="woman-doing-knee-highs"
            />
            <div className="worqout-copy">
              <div className="popular-worqout-label">High Knees</div>
              <div className="popular-worqout-description">
                Stand with your feet hip-width apart. Lift up your left knee to
                your chest. Switch to lift your right knee to your chest.
                Continue the movement, alternating legs and moving at a
                sprinting or running pace.
              </div>
            </div>
          </div>

          <div className="popular-worqout-card">
            <img
              className="popular-worqout-img"
              src={pr3}
              alt="woman-doing-side-planks"
            />
            <div className="worqout-copy">
              <div className="popular-worqout-label">Side Planks</div>
              <div className="popular-worqout-description">
                Lie on your right side, legs straight and feet stacked. Place
                your right elbow under your right shoulder with your forearm
                pointing away from you. Lift your hips off the mat and hold this
                position then repeat on your left side.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
