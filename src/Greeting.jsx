// colocamos el inicio export para poder sacar esta función y usarla en otro archivo
// para poner props los pasamos como si fueran parámetros comunes en uan función
export function Greeting ({title}){
    console.log(title)
    return <h1> {title} </h1>
}

export function UserCar(){
    return <h1>User card</h1>
}