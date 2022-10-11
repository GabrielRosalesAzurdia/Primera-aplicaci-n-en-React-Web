// Usando una función flecha para crear un componente
// también estaré utilizando fech para tomar información

// Jalamos también la biblioteca de íconos
import { VscBug } from "react-icons/vsc";

export const Posts = () => {
	return (
		<button
			onClick={() => {
				fetch("https://jsonplaceholder.typicode.com/posts")
					.then((response) => response.json())
					.then((data) => console.log(data))
					.catch((error) => console.error(error));
			}}
		>
			<VscBug />
			Traer datos
		</button>
	);
};
