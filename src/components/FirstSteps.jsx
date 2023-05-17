
function FirstSteps() {

  return (
    <>

   <h2 className="titleFirstSteps centerAllign" id="firstInfoId">Primeros Pasos</h2>
    
   <div className="firstInfo justifyAllign">
    <h3> Hola Mundo </h3>
    <p> Para crear tu primer Hola Mundo en Idris, es tan sencillo como escribir estas líneas de código.</p>
      <pre className ="codeContainer">
        <code className="idrisCode">
        {`main : IO ()                 
main = putStrLn "Hola Mundo!"`}
      </code>
      </pre> 
      <p>Para ejecutarlo, debes guardar el código en un archivo con extensión <code className="idrisCode">.idr</code>, por ejemplo, <code className="idrisCode">holaMundo.idr.</code><br/><br/></p>
      <p>Posteriormente, debes abrir una terminal en la carpeta donde se encuentra el archivo y <b>ejecutar el siguiente comando:</b></p>
      <pre className ="codeContainer">
        <code className="idrisCode">
        {`idris2 holaMundo.idr`}
        </code>
      </pre>
      <p>Esto compilará el código y lo correrá, imprimiendo <b>"Hola Mundo!"</b></p>
      <br></br>
      <p>La primera línea de código,&nbsp; <code className="idrisCode">main : IO ()</code>, declara la función principal. En Idris, esta función debe tener el nombre <code className="idrisCode">main</code> y el tipo <code className="idrisCode">IO ()</code>. El tipo <code className="idrisCode">IO</code> es un tipo especial que indica que la función<b>  puede realizar efectos secundarios</b>, como leer o escribir en la consola. <code className="idrisCode">()</code> es un tipo para valores que no tienen información, y es el tipo de retorno de la función <code className="idrisCode">putStrLn</code>.</p>
      <br></br>

      <p>En la segunda línea de código, <code className="idrisCode">main = putStrLn "Hola Mundo!"</code>, se define el cuerpo de la función principal. En este caso, se hace una llamada a la función <code className="idrisCode">putStrLn</code>, que imprime una cadena en la consola, imprimiendo así: <b>"Hola Mundo!"</b></p>
      <br></br>
      <div className="containerRight">
      <h3 className="rightAligned"> Recibiendo una entrada </h3>
      </div>
      <p> Para recibir una entrada, podríamos escribir la siguiente modificación:</p>
      <pre className ="codeContainer">
        <code className="idrisCode">
{
`main : IO ()                           
main = do                              
  putStrLn "¿Cómo te llamas?"       
  nombre <- getLine                 
   putStrLn ("Hola " ++ nombre ++ "!")`
}
      </code>
      </pre>
      <p> En este caso usamos la palabra reservada <code className="idrisCode">do </code> para ejecutar <b>varias acciones encadenadas</b> (en programación funcional, esto se conoce como <b><a href="https://towardsdatascience.com/monads-from-the-lens-of-imperative-programmer-af1ab8c8790c" target="_blank">mónada</a></b>).</p><br></br>
      <p>En este caso, se hace una llamada a la función <code className="idrisCode">getLine</code>, que lee una línea de la consola y la devuelve como una cadena. Luego se concatena esta cadena con la respuesta a mostrar y  finalmente, se imprime en la consola. </p>


      <br></br>   

      <h3> Tipos de datos </h3>

      <p> En Idris, los tipos de datos se definen con la palabra reservada <code className="idrisCode">data</code>.<br></br><br></br> Por ejemplo, para definir un tipo de dato  <code className="idrisCode">Color</code> con tres valores posibles, <code className="idrisCode">Red</code>, <code className="idrisCode">Green</code> y <code className="idrisCode">Blue</code> podemos escribir lo siguiente:</p>

      <pre className ="codeContainer"> 
        <code className="idrisCode">
        { `data Color = Red | Green | Blue`}
        </code>
      </pre>

      <p>También podemos definir un tipo de dato <b>con parámetros</b>, por ejemplo, Idris define el tipo de dato <code className="idrisCode">Maybe</code> (que <b>puede</b> contener un valor o no) de la siguiente manera:</p>

      <pre className ="codeContainer">
        <code className="idrisCode">
        {`data Maybe a = Nothing | Just a`}
        </code>
      </pre>

      <p> <code className="idrisCode">a</code> es un parámetro de tipo. Por ejemplo, <code className="idrisCode">Maybe Int</code> es un tipo que puede contener un valor entero o no, y <code className="idrisCode">Maybe Nat</code> es un tipo que puede contener un número natural o no.</p>

      <br></br>

      <p> En Idris <code className="idrisCode">Nat</code> es un tipo que representa <b>números naturales</b> (enteros no negativos). Estos son representados con la notación de sucesión de Peano, es decir, <code className="idrisCode">Z</code> representa el cero, y <code className="idrisCode">S</code> representa el <b>sucesor de un número natural</b>. Por ejemplo, el número 3 se representa como <code className="idrisCode">S (S (S Z))</code>.</p>
      <br></br>

      <p> Para conocer más acerca de los tipos de datos primitivos, constructores y sobre tipos dependientes, puedes ver la presentación o la <b><a href = "https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#types-and-functions" target="_blank">documentación de Idris</a></b>.</p>


      <br></br>
      <div className="containerRight">
      <h3 className="rightAligned"> Funciones</h3>
      </div>

      <p> En la programación funcional es bastante común usar <b>recursión</b> para nuestras funciones, Podemos ver un ejemplo de la función factorial: </p>

      <pre className ="codeContainer">
        <code className="idrisCode">
        {`factorial : Nat -> Nat             
factorial Z = 1                    
factorial (S k) = S k * factorial k`}
        </code>
      </pre>

      <p> En este caso, la función factorial recibe un número natural y devuelve otro número natural. Si el número es cero, devuelve 1, y si no, devuelve el número <b>multiplicado por el factorial del número anterior.</b> </p><br></br>

      <p> Teniendo en cuenta la notación de sucesión de Peano, calcular el factorial de <code className="idrisCode">S(S(S Z))</code>, es decir 3, será igual a <code className="idrisCode">S(S(S(S(S(S Z)))))</code>, es decir 6.</p>

      <br></br>

      <p> En Idris, las funciones <b>pueden tener múltiples argumentos.</b> Por ejemplo, la función <code className="idrisCode">add</code> suma dos enteros:</p>

      <pre className ="codeContainer">
        <code className="idrisCode">
        {`add : Int -> Int -> Int
add n m = n + m        `}
        </code>
      </pre>

      <p> Las funciones, además, deben contar con completitud, es decir, <b>deben tener un caso para cada posible valor de sus argumentos.</b> Por ejemplo, la siguiente función no es válida:</p>


      <pre className ="codeContainer">
        <code className="idrisCode">
        {`add : Nat -> Nat -> Nat
        add Z n = n                    `}
        </code>
      </pre>

      <p> Si se requiere una función que no sea completa, se puede usar la palabra reservada <code className="idrisCode">partial</code> antes de iniciar la función. </p><br></br>

      <p> Idris también permite la definición de <b>operadores infix personalizados</b>. Si quieres conocer más, puedes visitar esta sección en la <b><a href="https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#data-types" target="_blank">documentación de Idris</a></b>.</p>

      <br></br>



    
      
      






      







      











  




  



    </div>

    
    </>
  )
}

export default FirstSteps