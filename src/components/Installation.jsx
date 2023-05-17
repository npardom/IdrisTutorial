import { useState } from "react";
import inst1 from "../assets/inst1.png";
import inst2 from "../assets/inst2.png";
import inst3 from "../assets/inst3.png";
import inst4 from "../assets/inst4.png";
import inst5 from "../assets/inst5.png";
import inst6 from "../assets/inst6.png";
import inst7 from "../assets/inst7.png";

function Installation() {
    const [selectedWindows, setSelectedWindows] = useState(true);

    function toggleInst(){
        const element = document.getElementById("windowsInstall")
        const element2 = document.getElementById("macInstall")
        if (element.classList == "wrapper"){
            element.classList.add('showInst');
            element2.classList.remove('showInst');
        }
        setSelectedWindows(true)
    }

    function toggleInst2(){
        const element2 = document.getElementById("windowsInstall")
        const element = document.getElementById("macInstall")
        if (element.classList == "wrapper"){
            element.classList.add('showInst');
            element2.classList.remove('showInst');
        }
        setSelectedWindows(false)
    }
  return (
    <div className ="installationContainer" id ="installId">
   <h2 className="titleIntegrantes centerAllign">Instalación</h2>
   <a className ="installLink" target="_blank" href={selectedWindows ? "https://idris2.readthedocs.io/en/latest/tutorial/windows.html":"https://idris2.readthedocs.io/en/latest/tutorial/starting.html"} >Ver instrucciones detalladas</a>
    <div className ="buttonContainer">
        <div className ={selectedWindows ? "installOptButton selectedOne": "installOptButton"} onClick={toggleInst}>Windows</div>
        <div className ={!selectedWindows ? "installOptButton selectedOne": "installOptButton"} onClick={toggleInst2}>Mac y Linux</div>
    </div>
    <div className="wrapper showInst" id="windowsInstall">
      <div className="slide">
          <img src={inst1} className ="instPic" />
          <p className ="centerAllign"><b>1)</b> Descargar ambiente <b>MSYS2</b> </p>
     </div>
        <div className="slide">
          <img src={inst2} className ="instPic" />
          <p className ="centerAllign"><b>2)</b> Desempaquetar y construir <b>Idris</b></p>
        </div>
        <div className="slide">
          <img src={inst3} className ="instPic" />
          <p className ="centerAllign"><b>3)</b> Añadir a <b>PATH</b> </p>
        </div>
        <div className="slide">
          <img src={inst4} className ="instPic"/>
          <p className ="centerAllign"><b>4)</b> Ejecutar </p>
        </div>
    </div>

    <div className="wrapper" id="macInstall">
      <div class="slide">
          <img src={inst5} className ="instPic" />
          <p className ="centerAllign"><b>1)</b> Descargar gestor de paquetes <b>Homebrew</b> </p>
     </div>
        <div className="slide">
          <img src={inst6} className ="instPic"/>
          <p className ="centerAllign"><b>2)</b> Instalar <b>Idris 2</b> </p>
        </div>
        <div className="slide">
          <img src={inst7} className ="instPic"/>
          <p className ="centerAllign"><b>3)</b> Ejecutar </p>
        </div>
    </div>
    </div>
  )
}

export default Installation