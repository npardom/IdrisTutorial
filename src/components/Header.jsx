import logo from "../assets/logo.png";
import { useState,useEffect } from "react";

function Header() {
  const [title, setTitle] = useState("!)*0514?");
  
  const lista = [
    "!)*0514L",
    "!)*051AL",
    "!U*051AL",
    "TU*0R1AL",
    "TU*OR1AL",
    "TUT0R1AL",
    "TUTORIAL",
  ]

  useEffect(()=>{
    for (var i = 0; i < 7; i++) {
      setTitle(lista[i])
    }
  }, [])

  return (
    <div className = "titleContainer">
      <img src={logo} className = "websiteLogo"/>
      <div className = "titleText">{title}</div>
    </div>
  );
}

export default Header;
