import logo from "../assets/logo.png";

function Header() {

  return (
    <div className = "titleContainer">
      <img src={logo} className = "websiteLogo"/>
      <div className = "titleText">TUTORIAL</div>
    </div>
  );
}

export default Header;
