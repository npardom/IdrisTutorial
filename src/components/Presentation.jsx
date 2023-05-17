import tutorial from "../assets/TutorialIdris.pdf"
import download from "../assets/download.png"
import mac from "../assets/mac.png"
function Presentation() {
  return (
    <>
    <div className ="firstInfo2" id ="presentationId">
    <hr></hr>
    <div className="presentationTitleContainer">
    <h2 className="centerAllign">Presentación</h2>
    <a href={tutorial} download className ="linkNoDecor">
      <div className="containerDownload"><img src={download} className="downloadIcon" alt ="Descargar PDF"/></div>
    </a>
    </div>
    </div>
    <div className="macContainer">
    <img src={mac} className="mac"/>
    <div className ="canvaContainer">
  <iframe loading="lazy" className="containerCanva2" src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFhTrf_V0o&#x2F;view?embed"></iframe>
  </div>
  </div>
  </>
  )
}

export default Presentation  