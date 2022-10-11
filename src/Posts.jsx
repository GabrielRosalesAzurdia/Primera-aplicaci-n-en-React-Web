// Usando una función flecha para crear un componente
// también estaré utilizando fech para tomar información

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
			Trear datos
		</button>
	);
};
