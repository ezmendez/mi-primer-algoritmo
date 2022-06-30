
/*let edad= parseInt(prompt("Ingresa tu edad"))
if (edad>=18 && edad<=70){
    alert("Tenemos el mejor contenido para ofrecerte")
}
else if (edad>=1 && edad<=17){
    alert("Sos demasiado joven para estar aca, no podemos ofrecerte ningun servicio")
}
else if(edad>=70){
    alert("Ups, parece que estas un poco grande, para poder ofrecerte algún servicio!")
}
else{
    alert("Ingrese un numero valido")
}
*/
// ahi realice un algoritmo para validar la edad, lo comente asi no se pisa con el segundo

let nombre = prompt("Ingrese su nombre");
while(nombre != "ESC") {
    alert ("El usuario ingresó: " + nombre)
    nombre = prompt("Ingresar otro nombre")
}