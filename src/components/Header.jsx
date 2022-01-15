import logo from "../logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <img src={logo} className="Header-logo" alt="logo" />
      <nav className="Header-nav">
        <ul className="Header-nav-items">
          <li>
            <a href="index.html">Pricing</a>
          </li>
          <li>
            <a href="index.html">About</a>
          </li>
          <li>
            <a href="index.html">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
