import logo from "../assets/meheszet-logo-resized.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar-container">
      <img src={logo} alt="logo" id="logo" height={100} />
      <div class="nav-links">
        <Link class="nav-link" to="/">
          Főoldal
        </Link>
        <Link class="nav-link" to="/about">
          Rólunk
        </Link>
        <Link class="nav-link" to="/products">
          Termékek
        </Link>
        <Link class="nav-link" to="/contact">
          Kapcsolat
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
