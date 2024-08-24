import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="rightContainer">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
