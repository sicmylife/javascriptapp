window.onload=inicio;
let rojo="https://www.html6.es/img/rojo.png";
let azul="https://www.html6.es/img/azul.png";
let caja;

function inicio(){
    caja=document.querySelector("#caja");
   document.querySelectorAll("button")[0].onclick=unoRojo;
   document.querySelectorAll("button")[1].onclick=cuatroAzules;
   document.querySelectorAll("button")[2].onclick=modificarAzules;
   document.querySelectorAll("button")[3].onclick=eliminarRojos;
   document.querySelectorAll("button")[4].onclick=vaciar;

}  
function unoRojo(){
    console.log("hola")
caja.insertAdjacentHTML( "beforeend",`<img class="rojo" src="${rojo}">`);
}

function cuatroAzules(){
    for(let k=0; k<4;k++)
    caja.insertAdjacentHTML( "beforeend",`<img  class="azul" src="${azul}">`);
}

function modificarAzules(){
    let contar=document.querySelectorAll(".azul").length;
    for(let k=contar-1;k>=0;k--){
        document.querySelectorAll(".azul")[k].src=rojo;
        document.querySelectorAll(".azul")[k].setAttribute("class","rojo");
    }
}

function eliminarRojos(){
    let contar=document.querySelectorAll(".rojo").length;
    for(let k=contar-1;k>=0;k--){
        document.querySelectorAll(".rojo")[k].remove();
    }
}

function vaciar(){
    caja.innerHTML="";
}