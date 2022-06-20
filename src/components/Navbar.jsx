import logo from "../assets/meheszet-logo-resized.jpg";

const Navbar = () => {
  return (
    <div class="navbar-container">
      <img src={logo} alt="logo" id="logo" height={100} />
      <div class="nav-links">
        <a class="nav-link" href="/">
          Főoldal
        </a>
        <a class="nav-link" href="/about">
          Rólunk
        </a>
        <a class="nav-link" href="/products">
          Termékek
        </a>
        <a class="nav-link" href="/contact">
          Kapcsolat
        </a>
      </div>
    </div>
  );
};

export default Navbar;
