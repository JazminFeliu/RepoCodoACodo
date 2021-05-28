//definir arrays, 1ra forma
let primeraFormaArray =  ["emi", "jose", 123, true, [12,23]];
console.log(primeraFormaArray[0]);

//segunda manera de definir vectores/arreglos/arrays
let segundaFormaArray = new Array("emi", "jose", 1,2,3);

//tercera forma 
let terceraFormaSaleMal = new Array();
terceraFormaSaleMal[0]="emi";
terceraFormaSaleMal[1]="jose";
terceraFormaSaleMal[2]="juan";
terceraFormaSaleMal[4]="ana";

console.log(terceraFormaSaleMal);

//entrar al ultimo elemento del array, el length del array es la cantidad de elementos -1
console.log(terceraFormaSaleMal.length);
console.log(terceraFormaSaleMal[terceraFormaSaleMal.length - 1]);

console.log(terceraFormaSaleMal);
console.log(terceraFormaSaleMal.sort());
console.log("El primer nombre es: ", terceraFormaSaleMal[0]);

///////ejemplo con numeros///////hay que usar un sort con un callback
let miArray = [3,5,10,45,11,90,9];
console.log(miArray.sort());

miArray.sort(function(a,b){
    return a - b;
})
console.log(miArray);

let tercerVector = new Array();
tercerVector[0]=1;
tercerVector[1]=3;
tercerVector[2]="jose";

//con PUSH agregamos al final
tercerVector.push("rocio");
console.log(tercerVector);

tercerVector[tercerVector.length]="ruperto";
console.log(tercerVector);

//unshift sirve para agregar al principio

tercerVector.unshift("pipo");
console.log(tercerVector);

//join convierte en string
console.log("Imprimiendo como string", tercerVector.join(" - "));
console.log("Imprimiendo como string", tercerVector.join(" \ns "));

//borrar al principio y al final
//borrar el primer elemento
tercerVector.shift();
console.log(tercerVector);

//borrar ultimo elemento
tercerVector.pop();
console.log(tercerVector);

////// para borrar algo del medio uso SPLICE
tercerVector.splice(1,2);
console.log(tercerVector);

////tambien SPLICE sirve para meter elemntos en el medio
tercerVector.splice(1,0,"pipo","emi","santy","jaz");
console.log(tercerVector);

//SPLICE primer parametro es ubicacion, 2do cuantos borras, 3ro lo que agregas

let unArray1 = [1, 2, 3];
let otroArray1 = [4,5,6];

//crear otro vector con los dos arrays
/////CONCAT///

let concatenado = unArray1.concat(otroArray1);
console.log(concatenado);

////////METODOS DE LOS STRINGS//////////////

///includes
///algoritmo basico BASICO para ver si el mail esta bien
let email = "mailFalso@gmail.com";
if(email.includes("@")){
    console.log("es un email valido");    
}else{
    console.log("el email no es válido");
}

///trim
let nombreUsuario = "           josé       ";
console.log(nombreUsuario);
console.log(nombreUsuario.trim());

///substring para cortar texto
let cortarTexto = "vamos a cortar este texto";
console.log(cortarTexto.substring(0,5));

//split 
let texto = "juan carlos batman";
console.log(texto.split(" "));

/////////////////FUNCIONES FLECHA//////////////
//tipos de funciones
// declarativa
function sumar(a,b){
    return a + b;
}

//expresiva
let suma = function(a,b){
    return a + b;
}

//funcion flecha o arrow functions

let suma2 = (a,b) => {
    return a + b;
}

//FOREACH
let arrayNuevo = [1,2,3,4,5,6];

arrayNuevo.forEach(element => {
    console.log(element);
})

arrayNuevo.forEach(function(element, index, arreglo){
    console.log(element);
    console.log(index);
    console.log(arreglo);
})

//arrow
arrayNuevo.forEach(elemento => {
    console.log(elemento);
})

//EVERY 
const numeros = [8,13,50,45,98,56];
//todos son menores a 100?
console.log(numeros.every(n => n<100));

////MAP
// a partir de un array de pares, crear uno de impares
const pares = [2,4,6,8,10];

let impares =pares.map((numero)=> numero+1);
console.log(impares);

//un numero y al lado el multiplicado *2
const multiplicadoPor2 = pares.map(item => [item*2]);
console.log(multiplicadoPor2);

/////////find 
let peliculas =[ "el padrino", "pulp fiction", "soul"];
let pulpFiction = peliculas.find(peliculas => {
    return peliculas.includes("pulp");
})
console.log(pulpFiction);

/////////filter
let number =[ 123,234,345,456];
let big = number.filter(x => x > 200);
console.log(big);

//////REDUCE  hace una operacion y devuelve un solo numero
const sumaCarrito = [1,2,3];
let reducido = sumaCarrito.reduce((acumulador, elemento) =>acumulador + elemento, 0)
console.log(reducido);
