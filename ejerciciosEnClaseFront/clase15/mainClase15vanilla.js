let formulario = document.querySelector("form");
let ul = document.querySelector("ul");
let input = document.querySelector(".input");
let tareas = [];

formulario.onsubmitv= ev =>{
    ev.preventDefault(); //no actualizamos toda la pagina
    tareas.push(input.value);

    //1ro crear elemento
    let li = document.createElement("li");

    //2 le metemos valor
    li.innerHTML= input.value;

    //3 agergar
    ul.appendChild(li);
}
