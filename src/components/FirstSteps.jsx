
function FirstSteps() {

  return (
    <>
   <h2 className="titleFirstSteps centerAllign">Primeros Pasos</h2>


    
   <div className="firstInfo" id="helloWorld">
    <h3> Hola Mundo </h3>
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
      <br></br>
      <p>La primera línea de código, <code className="idrisCode">main : IO ()</code>, declara la función principal. En Idris, esta función debe tener el nombre <code className="idrisCode">main</code> y el tipo <code className="idrisCode">IO ()</code>. El tipo <code className="idrisCode">IO</code> es un tipo especial que indica que la función puede realizar efectos secundarios, como leer o escribir en la consola. <code className="idrisCode">()</code> es un tipo para valores que no tienen información, y es el tipo de retorno de la función <code className="idrisCode">putStrLn</code>.</p>
      <br></br>

      <p>En la segunda línea de código, <code className="idrisCode">main = putStrLn "Hola Mundo!"</code> se define el cuerpo de la función principal. En este caso, se hace una llamada a la función <code className="idrisCode">putStrLn</code>, que imprime una cadena en la consola, imprimiendo así: "Hola Mundo!"</p>
      <br></br>

      <h3> Recibiendo una entrada </h3>
      <p> Para recibir una entrada, podríamos escribir la siguiente modificación</p>
      <pre>
        <code className="idrisCode">
{
`
main : IO ()
main = do
  putStrLn "¿Cómo te llamas?"
  nombre <- getLine
  putStrLn ("Hola " ++ nombre ++ "!")`
}
      </code>
      </pre>
      <p> En este caso usamos la palabra reservada <code className="idrisCode">do </code> para ejecutar varias acciones encadenadas (en programación funcional esto se conoce como <a href="https://towardsdatascience.com/monads-from-the-lens-of-imperative-programmer-af1ab8c8790c">mónada</a>)</p>
      <p>En este caso, se hace una llamada a la función <code className="idrisCode">getLine</code>, que lee una línea de la consola y la devuelve como una cadena. Luego se concatena esta cadena con la respuesta a mostrar y,  finalmente, se imprime en la consola. </p>


      <br></br>   

      <p> Bastante sencillo, ¿no?. La programación funcional es muy distinta a la programación imperativa, pero aunque su curva de aprendizaje es un poco más empinada, aprender a programar con este paradigma nos permite, como programadores, aprender nuevas perspectivas para resolver problemas y nos permite mejorar nuestras habilidades de abstracción y pensamiento lógico. </p>



  



    </div>

    
    </>
  )
}

export default FirstSteps