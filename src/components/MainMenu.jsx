import menuIcon from "../assets/menuIcon.png";

function MainMenu() {

    function toggleMenu(){
      var element = document.getElementById("menuId");
      if(element.classList =="menuContainer"){
        element.classList.add('shown');
      }else{
        element.classList.remove('shown');
      }
    }

  return (
    <>
    <div className="menuButton" onClick ={toggleMenu}>
      <img src={menuIcon} className = "menuLogo"/>
    </div>
    <div className = "menuContainer" id ="menuId">
        <div className = "menuItem">Sobre Idris</div>
        <div className = "menuItem">Características</div>
        <div className = "menuItem">Ejemplos</div>
        <a href="#integrantes">
          <div className = "menuItem">Integrantes</div>
        </a>
    </div>
    </>
  )
}

export default MainMenu