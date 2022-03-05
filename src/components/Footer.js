import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Link className="footer-links" to="/">
          Home
        </Link>
        <Link className="footer-links" to="/routines/all">
          Routines
        </Link>
        <Link className="footer-links" to="/activities">
          Activities
        </Link>
      </div>
    </>
  );
};

export default Footer;
