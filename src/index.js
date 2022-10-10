// archivo principal que toma REACT

/* 
    importamos la bibliotca de REACT para comenzar
    Ya que react trabaja tanto para la web como para teléfonos 
    y aplicaciones de escritorio hay que especificar que estaremos
    trabajando con su versión web, es decir el DOM
*/
import React from "react"
//  esta es la importación para la web
import ReactDOM from "react-dom/client"

/* 
    ya que react monta nuestra aplicación en la etiqueta con id root 
    en el index html de la carpeta public debemos seleccionar este elemento

    ya que no sabemos aún qué vamos a colocar dentro de ese elemento llamamos
    al método .createRoot del ReactDOM, le pasamos el div con id root

    esto nos devuelve una aplicación inicial de REACT, el llamdo elemento root

    Ahora tenémos una aplicación de react inicializada
*/
const root = ReactDOM.createRoot(document.getElementById("root"))

/*
    para mostrar cosas dentro utilizado la función render y lo que 
    quiere son children que son elementos html
*/ 
root.render(<h1>Hello World!</h1>)