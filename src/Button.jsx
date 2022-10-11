// Retornar un botón desde un componente no es inútil pues puede programarse con
// lógica y con estilos cosas que pueden variar según los props

import PropTypes from "prop-types";

export function Button({ text, name }) {
	return (
		<button
			onClick={function () {
				console.log("hola mundo!");
			}}
		>
			{text} - {name}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
};

Button.defaultProps = {
	name: "some user",
};
