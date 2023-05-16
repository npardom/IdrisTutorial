
function FirstSteps() {

  return (
    <>
   <h2 className="titleFirstSteps centerAllign">Primeros Pasos</h2>

    
   <div className="firstInfo" id="helloWorld">
    <p> Para crear tu primer Hola Mundo en Idris, es tan sencillo como escribir estas tres líneas de código.</p>
      
      <pre>
        <code className="idrisCode">
{
`
main : IO ()            
main = putStrLn "Hola Mundo!"`

}
      </code>
      </pre> 
      <p>Para ejecutarlo, debes guardar el código en un archivo con extensión .idr, por ejemplo, holaMundo.idr.</p>
      <p>Posteriormente, debes abrir una terminal en la carpeta donde se encuentra el archivo y ejecutar el siguiente comando:</p>
      <pre>
        <code className="idrisCode">
        {`idris2 holaMundo.idr`}
        </code>
      </pre>
      <p>Esto compilará el código y lo correrá, imprimiendo "Hola Mundo!"</p>
      <h3> ¿Cómo funciona? </h3>
      <p>La primera línea de código, <code className="idrisCode">main : IO ()</code>, declara la función principal. En Idris, esta función debe tener el nombre <code className="idrisCode">main</code> y el tipo <code className="idrisCode">IO ()</code>. El tipo <code className="idrisCode">IO</code> es un tipo especial que indica que la función puede realizar efectos secundarios, como leer o escribir en la consola. <code className="idrisCode">()</code> es un tipo para valores que no tienen información, y es el tipo de retorno de la función <code className="idrisCode">putStrLn</code>.</p>
      <br></br>

      <p>En la segunda línea de código, <code className="idrisCode">main = putStrLn "Hola Mundo!"</code> se define el cuerpo de la función principal. En este caso, se hace una llamada a la función <code className="idrisCode">putStrLn</code>, que imprime una cadena en la consola, imprimiendo así: "Hola Mundo!"</p>

  



    </div>

    
    </>
  )
}

export default FirstSteps