# Aprendiendo React

GR - 2022

Viendo tutorial de fazt - https://youtu.be/rLoWMU4L_qE

empezamos con el comando

>npx create-react-app my-app

La carpeta más importante será la de src donde estarán todos los archivos de código
que estaremos utilizando

El objetivo con REACT es ya no manejar tanto HTML sino que Javascript se encargue
de generar las interfaces de HTML

Dentro del index.html de la carpeta public veremos la estructura básica y por 
defecto de un proyecto de REACT, lo que nos puede llegar a interesar es 
que los meta nos sirve para el responsive, y el div con id "root" que es donde
se va a colocar la interfaz que vallamos a crear. Al final todo el código de JS
será cargado en el HTML index de la carpeta public.

Dentro de la carpeta src irá código de javascript, css y de html. en el archivo
index.js se hace más que todo importaciones. La idea con REACT es colocar el
codigo de css, html y js de manera conjunta y al final todo lo vamos a acoplar 
en una sola.

El package.json nos sirve para determinar las bibliotecas y dependencias que usaremos
en nuestra aplicación REACT.

>npm start lanza el proyecto

>npm run build crea una versión de producción del proyecto

En los archivos hace falta una carpeta, esta es de las más importantes y es la capeta
build, cuando usemos react todo será código de desarollo pero al terminar de desarrollar
crearemos una nueva carpeta que será la que se va a despegar es decir al correr el 
comando npm run build, todo lo que esté en la carpeta build es la app para producción
No se supe todo el proyecto solo la carpeta build.
Ya está optimizado y se sube a un hosting compartido o a un servicio en la nube.

Carpeta node_modules es solo datos para que react pueda funcionar pero que no
nos interesa saber qué son ni qué tienen es funcionamiento interno y es mejor 
si no lo tacamos.

El package-lock.json tampoco se modifica, lo utiliza node para seguimiento de 
los paquetes.

---- borramos todo lo que se encuentra en src ----

## Iniciar app
Creamos el archivo Js que es el archivo principal que toma react
src/index.js
React al hacer un cambio y guardar refleja de un solo los cambios en el server

## Componentes
ES MUY IMPORTANTE ESCRIBIR COMPONENTES CON LA PRIMERA LETRA MAYÚSCULA
ESTO DIFERENCIA LOS COMPONENTES DE LAS FUNCIONES DE JS Y DE LAS 
ETIQUETAS DE HTML

En REACT todo es un componente, la navbar, post, sidebar, botones todo pueder ser 
roto entre componente, son porciones de una interfaz más grande, los componentes
son reutilizables (como los de vue y sus templates y componentes) Todo empieza
apartir de un componente inicial que sería el root, componente que creamos en la 
sección anterior

A la hora de crear un componente se habla directamente de funciones

En React es posible hacer esto:

>function Greeting (){

>    return < div >

>    < h1 >Este es un componente< /h1 >

>    < p >este es texto de relleno para el componente< /p >

>    < /div >

>}

y entregar datos en etiquetas html puras sin comillas como normalmente nos lo 
pediría javascript ya que utilizamos una sintaxis especial llamda JSX que es una
combinación entre javascript y html, mas o menos. Permite que dentro de un archivo
de javasript se retornen porciones de html y luego será convertido en Javascript puro

## Condicionales ternearias
variable ? valor_si_true : valor_si_false. es muy utilizado en react, por ejemplo:

>const name = "Gabo"

>const married = true

>return < h1 > {married ? name + " está casado" : name + " no está casado 😎"}< /h1 >

el emoji lo jalamos copiendo la imagen desde una página con unicode. Esto es posible
para vscode ya que mezcla caracteres y lo interpresta como un emoticon

## Recordando JSON
Para poder mostrar un objeto debemos crear una string que sea ese objeto ya que 
solo pasando el objeto no funcionará, también sirve para comunicarse con el backend

>function Greeting (){

>    const user = {

>    firstName: "ryan",

>    lastName: "godinez",

>    }

>    return < h1 >{JSON.stringify(user)}< /h1 >

>}

> JSON.strinfigy(x) convierte las cosas en string
> JSON.parse(x) regresa las cosas a su estado original

Los elementos al ser ya strings puedo llamarlos y representarlos dentro de la interfaz

>return < div>

>    < h1>{user.firstName}</ h1>

>    < h3>{user.lastName}</ h3>

>    < h4>Está casado? {married.toString()}</ h4>

></ div>

Para mostar un booleano puedo usar el método .toString()

## Fragment
Para no caer en el uso excesivo de muchas etiquetas div puedo hacer uso de 
los fragment, los fragment se crear solo haciendo lo siguiente
<> ... </> son dos etiquetas vacías sin nombre donde dentro coloco 
el contenido que quiero mostrar pues React siempre necesita tener un elemento padre
Es un contendor vacío y no se converte en nada al final

## Exportando e Imoprtando datos
la función en otro archivo debería verse así : 

>export function Greeting (){

>    function add(x,y){

>    return x+y

>    }

>    return < h1 >{add(1,2)}< /h1 >

>}

Notamos el export al inicio
y el archivo index.js tendrá un import así:

> import {Greeting} from "./Greeting"

De esa manera jalamos un componente que está en otro archivo para
poder mostrarlo desde el index.js. Para importar varios:

> import {Greeting, UserCar} from "./Greeting"

Para no exportar de manera indivisual podemos hacer lo siguiente

>function Product(){

>    return < div >

>    Producto

>    </ div >

>}

>export function Navbar(){

>    return < nav>

>    navigation

>    </ nav>

>}

>export default Product

Colocar la sentencia export default que jala todo el archivo
Ahora en el index usamos lo siguiente:

>import Product from "./Product"

Y si también queremos el segundo componente que está llí listado
que no lo estamos tomando ahora mismo podemos hacerlo así:

>import Product, {Navbar} from "./Product"

Deémde de la aplicación que se quiere usar y del desarrollador.

## Extensión .jsx
La extensión .jsx nos dicta que lo que está dentro del archivo son
componentes que estarán devolviendo html y no funciones de Javascript 
convencionales. No es un requisito.
Es más una ayuda para el desarrollador ya que react sabe diferenciar entre
funcioens que retornan un código de html y funciones normales de Javascript

Herramientas como `VIT` si requieren que estemos utilizando esta sintaxis de
manera constante para su correcto funcionameinto

En lo que estamos usando actualmente, create-react-app, no es necesario.

## Prettier
Extención de vs code para poder hacer código mucho más legible a primer vista
comando:

> shift + alt + f

Para acceder a las configuraciones de comandos y shortcuts utilizamos 
la tecla

> f1

Sugiero cambiar la configuración por defecto de prettier y darle check en
"use tab to ident" así podrá identer con tab y no con espacios.

También como otro consegjo para vs code si damos un click al final de una palabra
que se repite muchas veces y precionamos

> ctrl + D

Se creará una instancia del cursor en cada una de esas palabras y solo precionando
una vez la tecla borrar se eliminarán todas ellas.

## Props
Ayuda a saber como poder cambiar datos internamente en un componente.
Por ejempo sirve para poder hacer una lista y que los datos tengan continuidad

Para pasar props lo que hacemos es colocarlos dentro de la etiqueta del componente
por ejemplo:

> < Greeting title="hola este es un prop"/>

> < Greeting title={30}/>


Luego en la función nos tocará tener un parámetro, no debe ser el mismo nombre
del que pasamo, que será un dicionario, en este diccionario accedemos
a las propiedades por nomre ahora si según se lo pasamos acá en la etiqueta

>export function Greeting (props){

>    return < h1 > {props.title} </ h1 >

>}

También como ya se que voy a estar recibiendo un objeto lo puedo estructurar
para obtener directamente el valor que quiero.

>export function Greeting ({title}){

>    console.log(title)

>    return < h1> {title} </ h1>

>}

Para pasar más de un parámetros simplemente se los añadimos como más elementos
de la etiqueta html:

> < Greeting title="hola este es un prop" name="Joe"/>

Y para recibirlo en el componente lo hago de esta manera:

>  Greeting ({title, name})

Y a los props se les puede colocar un valor por defecto para
evitar errores con `undefined`

>  Greeting ({title, name = "un nombre"})

Dentro también podemos pasarle datos como un objeto solo debemos
tener cuidado con la sintaxis ya que estaremos usando
datos como estos: 

>{{nombre:"name"}}

Los props  también pueden ser funciones

> greed={function(){alert("Hello")} }

Y en el componente se pueden llamra e imprimir

>console.log(greed)

>greed()

## Prop Types y Default Props

Son útiles en casos donde la aplicación falla, por ejemplo cuando un componente
recibe tipos de datos para los cuales no está preparado. Esto lo podemos
solucionar con una librería externa que se instala corriendo el siguiente comando:

>npm install --save prop-types

Para importart PropTypes a un archivo donde tengamos los componentes colocamos:

>import PropTypes from "prop-types"

Y luego abajo del componente colocamos:

>Button.propTypes = {

>    text : PropTypes.string

>}

Tal que text es el nombre del parámetro que estamos usando y Button es el nombre
del componente que estamos manejando, todo lo demás si se queda igual.

Al ejecutar esto funcinará de igual manera, y al momento de pasar un prop
incorrecto dará una advertencia de qué sucedió en la consola del navegador.

En caso damos un prop vacío y no querémos que eso suceda podemos establer que 
un prop es requerido ( en el código anterior ):

>...
>    text : PropTypes.string.isRequired
>...

Esto dará una advertencia en la consola anunciando el error.

Ahora si nos da el string, o dato, que nosotros estamos pidiendo pero 
está vacío ya queda en manos de nosotros el comprobarlo con código
de Javascript. 

Para establecer que un prop es opcional podemos darle un valor por defecto
la primera manera es igual a como lo hicimos anteriormente: 

> export function Button({text, name = "Usuario"}) {

Siendo name un prop que es totalmente opcional y podemos darselo o no darselo,
si se lo damos mostrará el valor que le dimos de lo contrario mostrará Usuario

La segunda manera es dejando la parte de arriba a como estaba antes y como si name
fuera un prop obligatorio: 

> export function Button({text, name}) {

Y abajo del componente colocar y de los proptypes colocar:

>Button.defaultProps = {

>    name : "some user"

>}

Ambas manera funcionan, no altera en nada cual utilicemos.

## Estilos de componentes

Los más sencillos de agregar son los estilos en linea, esos que 
se colocan directamente sobre la etiqueta con style="", pero esta no es la mnanera
que espera React de recibir los estilos, el espera código de Javascript así que
debe ir el llaves así:

> style={[propiedad:valor]}

y dentro un diccionario donde irá varias propiedades con nombre y valor según las reglas 
de css

> < div style={{background:"#202020",color:"#fff", padding:"20px"}}>

Cabe resaltar que con 

> ctrl + space

Sobre el set de llaves para empezar a escribir código visual studio nos dará 
todas las propiedades de css que podemos colocar ayudandonos si nuestra memoria
nos falla. Esto también se puede hacer sobre el espacio para colocar los valores.

Ya que en sí estamos usando código de Javascript para escribir estas propiedades
de css podemos aplicar también todos los conceptos de Javascript como
guardar los datos de estilo css en una variable:

>export function TaskCard() {

>	const cardStyles = { background: "#202020", color: "#fff", padding: "20px" };

>	return (

>	< div style={cardStyles} >

>	< h1 style={{ fontWeight: "lighter" }}>Mi primer tarea< /h1>

>	< p>Tarea realizada< /p>

>	< /div>

>	);

>}

También lo podemos hacer creando un archivo de css y creando clases en él. Para el nombre
de los archivos no hay reglas de mayúsculas o que se deban de llamar igual pero siempre
es buena práctica que compartan nombre con la entidad principal que los estará utilizando.
Este archivo se crea dentro del folder src y se escrbie de manera normal en css.

Para importar este archivo hacemos lo siguiente (ya que ahora html no es quien carga
el css sino que es webpack, quien se encarga de cargar fotos y etilos al trabajar
con javascript, lo importamos en el componente que lo usará):

>import "./task.css"

Y en el componente quedaría de la siguiente manera:

>export function TaskCard() {

>	return (

>	< div className="card">

>	< h1>Mi primer tarea< /h1>

>	< p>Tarea realizada< /p>

>	< /div>

>	);

>}

Cabe resaltar que no utilizamos class="" en react sino que className="".

Se pueden utilizar tanto estilos en línea o clases para colocar css.

Sumado a todo ello podemos condicionar los estilos, es decir cambiarlos según alguna
variable. Esto se hace con una condicional ternearia y se hace en el style:

> < span style={ready ? { background: "green" } : { background: "red" } }>

> 	{ready ? "tarea realiza" : "taea pendiente"}

> < /span>

Según el valor de ready si es falso o verdadero va a cambiar el color de fondo
del span y el contenido del span.

Esto también se puede aplicar para las clases:

> < span className={ready?"bg-green":"bg-red"}>

>    {ready ? "tarea realiza" : "taea pendiente"}

> < /span>

También cambia la clase que se usa y el contenido de la etiqueta siempre teniendo
en cuenta que estemos importando un archivo que tenga esas clases y que los nombres
de las clases estén bien escritos.

>.bg-red {

>	background-color: red;

>}


>.bg-green {

>	background-color: green;

>}

También podemos estar utilizando frameworks de css BOOTSTRAP cof cof o material

## Tipos de componentes

Hay otra forma de crear componentes que no son funciones y esto es usando clases, que
fue la primera forma en la que React creaba sus componentes, ahora ya no es tan usada:

>import { Component } from "react";

>export class Saludar extends Component {

>	// Debe tener un método que tire su contenido de jsx

>	render() {

>	return < h1>Hello World!< /h1>;

>	}

>}

Y en el index.js lo tomamos y lo mostramos como cualquier comopnente:

> import { Saludar } from "./Saludar";

> < Saludar />

REACT ESTÁ BASADO EN UN PARADIGMA FUNCIONAL

## Event Handlers

Nos sirven para actuar cuando algo ocurre en la página por ejemplo cuando alguien hace
un click ejecuta una lógica.

La manera más simple de colocarlos es directamente en la etiqueta del objeto 
que querramos estar atentos, por ejemplo:

>< button

>	onClick={function () {

>	console.log("hola mundo!");

>	} }

>	>

>< /button>

En su mayoría de veces voy a estar usando funciones anúnimas. Estas funciones ofrecen
información por medio de un objeto de javascript, esto lo recibimos en la función

> function(e){}

Normalmente llamamos a ese parámetro event o e o info. También podemos jalar
la info del input directamente en el render o en un componente recordemos que 
esto no altera:

> < input

>    id="hola"

>	onChange={function (e) {

>	console.log(e.target.value);

>	} }

> ">"< /input>

Para las funcioens anónimas podemos utilizarlas de la manera larga, que son las 
anteriores o de la manera shida que son las arrow function:

> (parametros) => {codigo}

Podemos también no usar funciones anónimas sino funciones normales fuera
del render y de las etiquetas. Fuera del render y encima del root:

>const handleChange = (e) => {

>	console.log(e.target.value);

>};

y para llamarla ya solo hacemos lo siguiente:

> onChange={handleChange}

El nombre es apropósito pues para siertas funciones y sus funcionalidades le damos
el nombre del evento que van a estar escuchando, en este caso como está escuchando
al evento onChange utilizamos handleChange, si fuera un onClick utilizamos
handleClick, etc. Esta forma con constante y función nombrada es mucho más común que
las arrow directas en las etiquetas.

Precionando `ctrl + space` en el input podemos ver las opciones que tenemos para todos
los eventos on... normalmente los investigamos conforme los vamos necesitando.

> onClick cuando damos click

> conDrag cuando se arrastra

> onBlur cuando se deselecciona

> onCopy cuando se copia

> onDoubleClick cuando damos doble click

> onSubmit cuando se envía un forlulario, normalmente en submit pero aquí no

Recuerda que submit refresca la página porque aplica métodos http, ya que es su 
comportamiento por defecto para enviar datos al backend, en React no lo envíamos
así, primero tomamos los datos del formulario y luego decidimos cuando enviarlos,
por ejemplo si primero querémos mostrar un ícono de carga o algo así.

Para prevenir la refrescada añadimos esto como primera línea de la función del
formulario, teniendo en cuenta que ya en el parámetro esté e para la info de evento:

> e.preventDefault();

## fetch() API

De las más utilizadas en los navegadores, nos ayuda a traer datos.

NOTA
También podemos crear componentes utilizando una función flecha:

>export const Post = () => {

>    codigo

>}

Al parecer es parecido a Axios.js en cuestión de que permite hacer una solicitud
de información a un backend, en lo personal si prefiero axios por lo robusto
que es pero probaremos un poco de fech acá.

Link que usaremos con una api de ejemplo ya publicada en la web:
https://jsonplaceholder.typicode.com/posts

Las apis con las que cuenta el navegador son :

> localStorage

> SesionStorage

> Canvas

> Notificaciones

> fetch

Ejemplo utilizando fetch:

>fetch("https://jsonplaceholder.typicode.com/posts")

>   .then((response) => response.json())

>   .then((data) => console.log(data));

Así de simple tomamos datos desde un backend para poder utilzarlos acá en react.
En caso ocurra un error al tomar la url podemos implementar un catch

>   .catch((error) => console.error(error));

Normalmente esto lo hacemos con promesas, asyc y await

## Modulos de terceros

Modulos creados por otros programadores, módulos que ya están creados con una 
funcionalidad en específico. En este ejemplo verémos como tenér iconos en la alpicacion
de una manera bastante sencilla. Usremos React icons: https://react-icons.github.io/react-icons/. Para instalarlo:

> npm install react-icons

Para importar según la terminación de la biblioteca usremos unos iconos u otros

>import { nombre-del-icono } from "react-icons/io"

Para íconos de ionic , para iconos de vs code sería vsc

> import { VscBug } from "react-icons/vsc"

Y para colocarlos: 

> < VscBug/>

Esto también funciona con mejores formas de hace peticiones, animaciones, formularios
ventanas emergentes o modales. Por ejemplo la biblioteca material ui que tiene ya 
varios componentes hechos como calendarios o tarjetas

## Arrays

Los arrays los craemos como arrays normales de Javascript, usualemnte tendrán objetos
dentro. Una biblioteca que puede ser útil para imágenes de pruebas es robohash
https://robohash.org/ y podemos usar enlaces como:

> https://robohash.org/user3

Usualmente recorremos los objetos que están dentro de una array para irlos mostrando.

En react no usamos bucles for sino que usamos métodos de arreglos. como .map .forEach
.fill etc. Ejemplo con map:

> names = ["Jose", "Juaquin", "Miguel"]

> names.map((name)=>return "hola " + name)

> resultado: ["hola Jose", "hola Juaquin", "hola Miguel"]

La diferencia de map con el for es que no modifica el array original, devuelve un nuevo
array. Por ejempo si tuvieramos un arreglo de usuarios en el render podemos hacer
lo siguiente:

>{user.map((user,index) => {

>return < h1 key={index} >{user.name}</ h1>;

>})}

Importante notar la key como prop de la etiqueta que se está devolviendo, la key debe
ser única en este caso el segundo parámetro que me devuelve map es el índice que está 
recorriendo así que podemos usarlo como key. EL QUE DEBE TENER EL KEY ES EL ELEMENTO
PADRE, NO CUALQUIER ELEMENTO, EL ELEMENTO QUE CONTIENE AL RESTO. Ejemplo:

>{user.map((user, index) => {

>	return (

>	< div key={index}>

>	< h1>user.name</ h1>

>   < img src={user.image}/>

>	< /div>

>	);

>})}

Muchos de los métodos a utilizar son:

> map para recorer

> filter para quitar elementos de un arreglo generado

> find para encontrar un elemento

> reduce para reducir

> sort para ordenar

## Hooks de React

Funciones que añade React para funcionalidad extra de la app, 
Los hooks nos ayudan a guardar datos y reaccionar ante cambios que hay
en el ciclo de vida de los componentes ya que estos hooks se enganchan a
la funcionalidad del ciclo de vidad el componente. Los hooks básicos son:

> useState

Este se usa de la siguiente manera:

> const [valor, function] = useState(valorinicial)

Se crean dos constantes donde la primera es donde estarémos guardado un valor
y la segunda una función que declararémos despúes y que servirá para alterar
el valor de la primera. Todo esto con useState que se le asiga el valor inicial

> useEffect

Se ejecuta cuando ciertas cosas han cambiado y puede interactuar directamente con
el DOM 

>useEffect(() => {

>  const subscription = props.source.subscribe();

>  return () => {

>  subscription.unsubscribe();

>  };

>});

Y tenémos también como el último miembro de los hoooks básicos a usecontext:

> useContext

Este si no lo entendí solo con documentación jajajja.

## useState

El hook más utilizado, nor sirve para alterar un valor con cada interacción que puede
ser despetada por un efecto onx

Se importa así:

>import {useState} from "react";

Lo primero que tenémos que tener en mente es que al usar useState nos va a devolver
un array con dos elementos, el elemento que se altera y una función. Es sintaxis
de Javascript el podertomar los elementos de la siguiente manera:

> let names = [1,2,3]

> const [num1, num2] = names

> num1 es 1

> num2 es 2

Es importatnte notar que la segunda variable normalmente es la palabra `set` seguida
del nombre de la pirmera variable, entonces las colocamos:

> const [counter, setCounter] = useState(0)

Ese 0 que le pasamos a useState es porque ese será el valor inicial de counter,
podemos cambiarlo por string, objet o arrays lo que nosotros querramos. Si nosotros
no colocamos nada entonces el valor de la primera variable es `undefined`

Y luego en el evento podemos colocarlo de la siguiente manera:

> < h1>Counter: {counter}</h1>

> < button

> 	onClick={() => {

> 	setCounter(() => counter + 10);

> 	} }

> ">" 

> Sumar

> < /button>

Lo que está en los parentesis del setCounter puede ser un valor para que al 
accionarse el evento sea ese el único cambio o una serie de operaciones
que hagan que ese valor pueda ser distinto, poe eso le podemos pasar un 
valor:

> setCounter(20)

O un a oepraciones por medio de una función anónima como lo hicimos arriba.

Esto ayuda para que React no recargue toda la página pero solo el elemento que 
le estamos dictando por medio de la función.

### React Development tools

Dandole click al mensaje que aparece en la consola nos enviará a un extensión
para navegador donde podrémos descargar la herramienta de desarrollo para el 
navegador.

Aparece cuando abramos otra vez la página y sus opciones están dandole click
en la flechita para más opcoines dentro de las opciones de desarrollo 
del navegador, donde está la consola, elementos, etc.

## Use Effect

También es bastante usado, sirve para cuando tengamos cambios en la interfaz,
se ejecuta cada vez que algo cambie el valor de otra cosa.

Lo importamos así :

>import { useEffect } from "react";

y su estructura es así: 

>useEffect(function () {});

Esperando como parámetro un función que será la accción que tomará. Esta función se 
ejecuta cada vez que haya un render, es decir cuando todo el componente se vuelva
a pintar. Al ejecutar algo revisa si hay cambios, si los hay corre un render.

En palabras simples, useEffect se ejecuta siempre que hay un cambio en el componente.

Aveces solo lo querémos usar una vez, como cuando se crea el componente, para hacer
eso utilizamos la siguiente sintaxis:

>useEffect(function () {

>console.log("render")

>}, []);

Ese arry vació al final hará que solo se imprima en la consola una vez render al inicio
de la vida del componente, todas las demás veces que hayan cambios este useEffect 
no hará nada. Aparte también podemos usar una función flecha.

También en el caso de tener 2 useState podemos decirle a la función useEffect que se
concentre en ejecutarse cuando cambie una en especifico:

>useEffect(function () {

>console.log("render")

>}, [counter]);

Esto funciona tal que counter es una variable con us useState y useEffect se ejecuta cada
que counter cambia.

Resumiendo, sin el arreglo hace que se ejecute siempre que hay algún cambio, con el 
arreglo vacío se ejecuta solo al crear el componente y con un elemnento en el arreglo 
se encargará de vigilar ese elemento y ejecutarse cuando cambie.

TUTORIAL TERMINADO !      

Me tardé 5 días.