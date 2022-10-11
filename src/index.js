// archivo principal que toma REACT

/* 
    importamos la bibliotca de REACT para comenzar
    Ya que react trabaja tanto para la web como para teléfonos 
    y aplicaciones de escritorio hay que especificar que estaremos
    trabajando con su versión web, es decir el DOM
*/
import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCar } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";

/* 
    ya que react monta nuestra aplicación en la etiqueta con id root 
    en el index html de la carpeta public debemos seleccionar este elemento

    ya que no sabemos aún qué vamos a colocar dentro de ese elemento llamamos
    al método .createRoot del ReactDOM, le pasamos el div con id root

    esto nos devuelve una aplicación inicial de REACT, el llamdo elemento root

    Ahora tenémos una aplicación de react inicializada
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
/*
    para mostrar cosas dentro utilizado la función render y lo que 
    quiere son children que son elementos html

    usualmente no se hace esto: 
    root.render(<h1>Hola mundo se fresca solo!</h1>)
    pero es bueno para hacer la prueba de que la biblioteca esté jalando bien

    Los componentes son funciones que siempre retornan una interfaz
    la interfaz retornada pueden ser etiquetas de botón, h1, div, etc.
    importante notar que esto no se puede hacer normalmente en js,
    el retornar html

    Creamos el primer componente
    Es una función que retorna html y también debe tener un elemento padre
    en esta caso es el div

    function Greeting (){
        return <div>
            <h1>Este es un componente</h1>
            <p>este es texto de relleno para el componente</p>
        </div>
    }

    para meter datos almacenados en l código de js a la interfaz utilizamos {}
    dentro de greeting

    ...
    const name = "Gabo"
    return <h1>{name}</h1>
    ...

    root.render(
        <div>
            <Greeting></Greeting>
            <Greeting></Greeting>
            <Greeting/>
            <Greeting/>
        </div>
    )
    Se escribe con un div porque siempre debe de haber un elemento que
    encapsule al resto, aplica también para el return de los componentes
*/

root.render(
	<>
		<TaskCard ready={false} />
		<Saludar />
		<Button text="saludar" />
		<form
			onSubmit={(e) => {
				e.preventDefault();
				console.log("enviando datos del form");
			}}
		>
			<h1>Forlulario Registro de Usuario</h1>
			<button>send</button>
		</form>
	</>
);