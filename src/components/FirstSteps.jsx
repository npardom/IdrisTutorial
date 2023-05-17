
function FirstSteps() {

  return (
    <>
   <h2 className="titleFirstSteps centerAllign">Primeros Pasos</h2>


    
   <div className="firstInfo" id="helloWorld">
    <h3> Hola Mundo </h3>
    <p> Para crear tu primer Hola Mundo en Idris, es tan sencillo como escribir estas tres líneas de código.</p>
      
      <pre>
        <code className="idrisCode">
        {`
        main : IO ()            
        main = putStrLn "Hola Mundo!"`}
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

      <h3> Tipos de datos </h3>

      <p> En Idris, los tipos de datos se definen con la palabra reservada <code className="idrisCode">data</code>. Por ejemplo, para definir un tipo de dato <code className="idrisCode">Color </code> con tres valores posibles, <code className="idrisCode">Red</code>, <code className="idrisCode">Green </code> y <code className="idrisCode">Blue </code> podemos escribir lo siguiente:</p>

      <pre> 
        <code className="idrisCode">
        { `data Color = Red | Green | Blue`}
        </code>
      </pre>

      También podemos definir un tipo de dato con parámetros, por ejemplo, Idris define el tipo de dato <code className="idrisCode">Maybe </code> (que puede contener un valor o no) de la siguiente manera:

      <pre>
        <code className="idrisCode">
        {`data Maybe a = Nothing | Just a`}
        </code>
      </pre>

      <p> <code className="idrisCode">a</code> es un parámetro de tipo. Por ejemplo, <code className="idrisCode">Maybe Int</code> es un tipo que puede contener un valor entero o no, y <code className="idrisCode">Maybe Nat</code> es un tipo que puede contener un número natural o no.</p>

      <br></br>

      <p> En Idris <code> Nat</code> es un tipo que representa números naturales (enteros no negativos). Estos son representados con la notación de sucesión de Peano, es decir, <code className="idrisCode">Z</code> representa el cero, y <code className="idrisCode">S</code> representa el sucesor de un número natural. Por ejemplo, el número 3 se representa como <code className="idrisCode">S (S (S Z))</code>.</p>

      <p> Para conocer más acerca de los tipos de datos primitivos, constructores y sobre tipos dependientes, puedes ver la presentación o la<a href = "https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#types-and-functions"> documentación de Idris</a>.</p>


      <br></br>

      <h3> Funciones </h3>

      <p> En la programación funcional es bastante común usar recursión para nuestras funciones, Podemos ver un ejemplo de la función factorial: </p>

      <pre>
        <code className="idrisCode">
        {`factorial : Nat -> Nat
factorial Z = 1
factorial (S k) = S k * factorial k`}
        </code>
      </pre>

      <p> En este caso, la función factorial recibe un número natural y devuelve otro número natural. Si el número es cero, devuelve 1, y si no, devuelve el número multiplicado por el factorial del número anterior. </p>

      <p> Teniendo en cuenta la notación de sucesión de Peano, calcular el factorial de S(S(S Z))  (3) será igual a S(S(S(S(S(S Z))))) (6) </p>

      <br></br>

      <p> En Idris, las funciones pueden tener múltiples argumentos. Por ejemplo, la función <code className="idrisCode">add</code> suma dos enteros:</p>

      <pre>
        <code className="idrisCode">
        {`add : Int -> Int -> Int
add n m = n + m `}
        </code>
      </pre>

      <p> Las funciones, además, deben contar con completitud, es decir, deben tener un caso para cada posible valor de sus argumentos. Por ejemplo, la siguiente función no es válida:</p>


      <pre>
        <code className="idrisCode">
        {`add : Nat -> Nat -> Nat
        add Z n = n`}
        </code>
      </pre>

      <p> Si se requiere una función que no sea completa, se puede usar la palabra reservada <code className="idrisCode">partial</code> antes de iniciar la función </p>

      <p> Idris también permite la definición de operadores infix personalizados. Si quieres conocer más, puedes visitar esta sección en la<a href="https://idris2.readthedocs.io/en/latest/tutorial/typesfuns.html#data-types"> documentación de Idris</a>.</p>

      <br></br>



    
      
      






      







      











  




  



    </div>

    
    </>
  )
}

export default FirstSteps