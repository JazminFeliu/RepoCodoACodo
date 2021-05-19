/// ESTRUCTURAS REPETITIVAS///

//while
let i = 1;
while(i <= 10){
    console.log("la variable i vale: " + i);
    i++;
}

//for
for(let j = 1; j<=15; j+=2){
    console.log("Ahora la variable j vale: "+ j);
}

//imprimir en el html todos los nros pares hasta un nro ingresado por el usuario

let numerazo = parseInt(prompt("Che, hasta donde queres imprimir los nros pares?: "));
for(let c = 0; c <= numerazo; c++){
    if(c%2 == 0){
        document.write(`<p> ${c} </p>`);
    }
}

//////////////FUNCIONES///////////////
function saludarF(){
    console.log("Hola, soy una función"); // esta es la funcion
}

saludarF();  // esta es la llamada a la funcion

//funcion que devuelve valores   RETURN////
// Crear una funcion que nos devuelva 5*6
function funcionSinParametros(){
    return 5*6;
}

let multip = funcionSinParametros();
console.log("multip vale: " + multip);

function funcionConParametros(num1, num2){
    return num1*num2;
}

let resultado = funcionConParametros(6,9);
console.log("La multip vale: ", resultado);

///FUNCIONES EXPRESIVAS//////
let funcionExpresiva = function(){
    console.log("soy expresiva");
}

funcionExpresiva();

//Calcular monto a dolares con funcion expresiva

let dolarHoy = 150;
let dolarPesos = function(cantidad){
    return cantidad/dolarHoy;
}

let cantidadPesos = 15000;
let cantidadDolaresTengo = dolarPesos(cantidadPesos);
console.log("tengo " + cantidadDolaresTengo + " dolares");

function tableDelUno(){
    for(let i = 0; i <= 10; i++){
        console.log("1 * ",i," =  ",1*i );
    }
}

tableDelUno();

////SCOPE//////
let variableGlobal = "Soy global";

let funcionVariablesInteras = function(){
    let x = "hola";
    var y = "1";

    if(true){
        let x = "chau";
        var y = 45254; 
        console.log( `let x vale ${x}`);
        console.log( `var y vale ${y}`);
    }

        console.log( `let x vale ${x}`);
        console.log( `var y vale ${y}`);
}
funcionVariablesInteras();
console.log(variableGlobal);

///////CALLBACK//////
function saludar(callback){
    callback();    
}

saludar(function(){
    console.log("funcion pasada por parametro");
})

function saludar3(name, callback){
    callback(name);
}

function saludoPuntual(name){
    console.log("Hola ", name);
}

function saludoAmistoso(name){
    console.log("Como andas querido: ",name);
}

saludar3("Carlos", saludoPuntual);
saludar3("Robertito", saludoAmistoso);

/////FUNCIONES AUTOEJECUTABLES //////
(function(){
    console.log("Holaaaaa");
})();

(function(name){
    console.log(`"Holaaaaa" ${name}`);
})("jazminaaa");




