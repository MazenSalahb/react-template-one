import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <img className="logo" src={logo} alt="logo" />
        <div className="links">
          <span className="icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#protofolio">Protofolio</a>
            </li>

            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#ontact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
