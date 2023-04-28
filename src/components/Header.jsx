import logo from "../assets/logo.png";

function Header() {

  return (
    <div className = "titleContainer">
      <img src={logo} className = "websiteLogo"/>
    </div>
  );
}

export default Header;
