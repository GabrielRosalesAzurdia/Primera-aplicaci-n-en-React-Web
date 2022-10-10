# Aprendiendo React

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

