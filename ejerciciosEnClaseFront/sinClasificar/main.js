// comentario de una linea
/* 
este es 
comentario 
multilinea
*/

/* variables validas
let cliente;
let Auto;
let _apellido;
let $cuota;
let camelCase; 
let PascalCase;
let snake_case; */

/*variables invalidas
let 1numero;//no puede empezar con numeros
let nombre--apellido;//guion significa menos
let break this class super; //palabras reservadas no se pueden usar */

console.log("---VAR LET CONST---");

let nombre ="Carlos";

//let nombre = "Jose"; //esto no se puede con let, si con var 

const nombre2 = "mariana"; 

var miNombre = "Emiliano";
var miBici = "ruta";

console.log("Mi nombre es: "+miNombre+" y mi bici es "+miBici);

/*String */
let str1="Comillas dobles";
let str2='comillas simples';
let str3=`bactik`;

console.log(str2 + " y " + str3)
console.log(`${str1} y ${str2}`);

//number
let numero1 = 2;
let numero2 = 3;

let suma = 0
for(var i=0; i<=5;i++){
    suma = suma+i;
}



console.log("La suma es: " + suma);

fc = ((a) => a + 100)

console.log( fc(10) )

//valores booleanos
let verdaderooo = true;
let falsisiiimo = false;

let esMayor = numero1 > numero2; 
console.log(esMayor);

//valor Null
let cuotaAnioQueViene = null;

//otros usos de las variables:
let nombreDelUsuario = prompt("Decime cual es tu nombre? ");
alert("Hola: " + nombreDelUsuario);



