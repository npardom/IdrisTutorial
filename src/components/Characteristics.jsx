import { useState } from "react"
import shell from "../assets/shell.png"

function Characteristics() {
    const [counter, setCounter] =useState(0);

    function FirstChar(){
        return(
            <p className ="charText">&gt;&nbsp;Lenguaje de programación puramente funcional.</p>
        )
    }

    function SecondChar(){
        return(
            <p className ="charText">&gt;&nbsp;Tipos dependientes, evaluación diferida opcional.</p>
        )
    }

    function ThirdChar(){
        return(
            <p className ="charText">&gt;&nbsp;Diseñado para ser un lenguaje de propósito general.</p>
        )
    }

    function FourthChar(){
        return(
            <p className ="charText">&gt;&nbsp;Basado en Haskell</p>
        )
    }

    function FifthChar(){
        return(
            <p className ="charText">&gt;&nbsp;Tipos de datos de primer orden.</p>
        )
    }

    function SixthChar(){
        return(
            <p className ="charText"> &gt;&nbsp;Verificador de totalidad.</p>
        )
    }

    function sendEnter(e) {
        e.preventDefault();
        setCounter(counter+1);
    }

  return (
    <>
    <h2 className="titleCaracteristicas centerAllign">Características</h2>
    <div className="characteristicContainer">
        <img src={shell} className ="shellImage"></img>
        <div className ="charTextContainer" >
        {counter >= 1 ? <FirstChar/>: <></>}
        {counter >= 2 ? <SecondChar/>: <></>}
        {counter >= 3 ? <ThirdChar/>: <></>}
        {counter >= 4 ? <FourthChar/>: <></>}
        {counter >= 5 ? <FifthChar/>: <></>}
        {counter >= 6 ? <SixthChar/>: <></>}
        {counter < 6 ? <form onSubmit={sendEnter}>
        <input placeholder="Presiona una tecla para continuar" className ="inputField" autoFocus onChange={sendEnter}></input> 
        </form>:
        <></>}
        </div>
    </div>
    </>
  )
}

export default Characteristics