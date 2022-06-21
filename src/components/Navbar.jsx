import logo from "../assets/meheszet-logo-resized.jpg";

const Navbar = () => {
  return (
    <div class="navbar-container">
      <img src={logo} alt="logo" id="logo" height={100} />
      <div class="nav-links">
        <a class="nav-link" href="/website-for-peter-react/">
          Főoldal
        </a>
        <a class="nav-link" href="/website-for-peter-react/about">
          Rólunk
        </a>
        <a class="nav-link" href="/website-for-peter-react/products">
          Termékek
        </a>
        <a class="nav-link" href="/website-for-peter-react/contact">
          Kapcsolat
        </a>
      </div>
    </div>
  );
};

export default Navbar;
