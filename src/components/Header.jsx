import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <NavLink to="/">
      <img src={logo} className = "websiteLogo"/>
    </NavLink>
  );
}

export default Header;
