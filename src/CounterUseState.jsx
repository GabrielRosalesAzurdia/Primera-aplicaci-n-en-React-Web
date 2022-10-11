// Componente que usará un hook
// Primero importamos al hook que usaremos
import { useState } from "react";

// Este componente suma, resta y reinicia el valor de una variable con botones
export function CounterUseState() {
	const [counter, setCounter] = useState(10);
	return (
		<div>
			<h1>Counter: {counter}</h1>
			<button
				onClick={() => {
					setCounter(() => counter + 10);
				}}
			>
				Sumar
			</button>
			<button onClick={() => [setCounter(() => counter - 10)]}>Reducir</button>
			<button
				onClick={() => {
					setCounter(0);
				}}
			>
				Reiniciar
			</button>
		</div>
	);
}

export function InputConHookUseState() {
    // Para ver como cambia mensaje ir a las opciones de desarrollador de React
    // Y ver el valor de hook y state de esta variable
	const [mensaje, setMensaje] = useState("");

	return (
		<div>
			<input type="text" onChange={(e) => setMensaje(e.target.value)} />
			<button onClick={()=>alert(mensaje)}>Save</button>
		</div>
	);
}