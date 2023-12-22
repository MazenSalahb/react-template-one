import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="header">
      <div className="container">
        <img className="logo" src={logo} alt="logo" />
        <div className="links" onClick={() => setIsShowing(!isShowing)}>
          <span className="icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <ul style={{ display: isShowing ? "block" : "none" }}>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#protofolio">Protofolio</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
