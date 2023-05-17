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
        <a className ="linkNoDecor" href="#firstInfo1">
        <div className = "menuItem">Sobre Idris</div>
        </a>

        <a className ="linkNoDecor" href="#characteristicsId">
        <div className = "menuItem">Características</div>
        </a>
        <a className ="linkNoDecor" href="#installId">
        <div className = "menuItem">Instalación</div>
        </a>
        <a className ="linkNoDecor" href="#firstInfoId">
        <div className = "menuItem">Primeros Pasos</div>
        </a>
        <a className ="linkNoDecor" href="#presentationId">
        <div className = "menuItem">Presentación</div>
        </a>
        <a className ="linkNoDecor" href="#integrantes">
          <div className = "menuItem">Integrantes</div>
        </a>
        <a className ="linkNoDecor" href="https://idris2.readthedocs.io/en/latest/index.html" target="_blank">
          <div className = "menuItem">Documentación</div>
        </a>
    </div>
    </>
  )
}

export default MainMenu