function Sumar(a,b) {
	return a + b;
}
function Producto(a,b) {
	var c = 20;
	return a*b*c;
}

//Obtener en consola los resultados de las funciones de arriba.

console.log("la suma de a + b es:",Sumar(10,25))
console.log("El producto a * b * c es:",Producto(10,25))

Persona = {
nombre: "Juan",
apellido: "Perez",
telefono: 900199703,
email: "juan.perez@gmail.com"
}

//Realizar una función que obtenga las propiedades del Objeto Persona.

function propiedadesPersona(){
    return Persona;
}

console.table(propiedadesPersona());