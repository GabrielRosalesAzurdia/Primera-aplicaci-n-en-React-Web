// colocamos el inicio export para poder sacar esta función y usarla en otro archivo
// para poner props los pasamos como si fueran parámetros comunes en uan función
export function Greeting({ title, name = "user" }) {
	return (
		<h1>
			{" "}
			{title} dice {name}
		</h1>
	);
}

export function UserCar({name, ammount, married, adress, greed}) {
    console.log(greed)
    greed()
	return (
		<div>
			<h1>{name}</h1>
			<p>${ammount}</p>
			<p>{married ? "married" : "single"}</p>
			<ul>
				<li>City : {adress.city}</li>
				<li>Street : {adress.street}</li>
			</ul>
		</div>
	);
}
