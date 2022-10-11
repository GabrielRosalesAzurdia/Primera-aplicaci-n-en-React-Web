// El archivio y el componente pueden llavarse de maneras distintas
// lo único importante es que el nombre del srchivo y el componente
// empiezen en mayúsculas

// importamos el archivo de css
// Ahora no aparece el archivo en el autocompletado pero es normal
import "./task.css";

export function TaskCard({ ready }) {
	return (
		<div className="card">
			<h1>Mi primer tarea</h1>
			<span className={ready ? "bg-green" : "bg-red"}>
				{ready ? "tarea realiza" : "taea pendiente"}
			</span>
		</div>
	);
}