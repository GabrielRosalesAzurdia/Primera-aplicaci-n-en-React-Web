// Componente que usará un hook useEffect y varios useEffect
// Primero importamos al hook que usaremos
import { useState, useEffect } from "react";

export function InputConHookUseEffect() {
	// Para ver como cambia mensaje ir a las opciones de desarrollador de React
	// Y ver el valor de hook y state de esta variable
	const [mensaje, setMensaje] = useState("");
    const [counter, setCounter] = useState(0)

	useEffect(function () {
		console.log("render");
	}, [counter]);

	return (
		<div>
			<input type="text" onChange={(e) => setMensaje(e.target.value)} />
			<button onClick={() => alert(mensaje)}>Save</button>
            <hr />
            <h1>Counter : {counter}</h1>
            <button onClick={()=>setCounter(counter + 1)}>
                Incrementar
            </button>
		</div>
	);
}