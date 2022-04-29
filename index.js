window.onload = inicio;

let imagenes = [
  
  "foto.jpg",
  "gorra.jpg",
  "tenedor.jpg",
  "saca.jpg",
  "llavero.jpg",
  "chupeta.png",
];
let orden = [];

let cantidad = imagenes.length;


function inicio() {
  document.getElementById("boton1").onclick = mas;
  document.getElementById("boton2").onclick = mostrar_todo;
}


function mas() {
    if (orden.length==imagenes.length){
        orden=[];
        document.getElementById("caja").innerHTML="";
        document.getElementById("boton2").disable=true; 

    }
        
    
    do {
         r = Math.floor(Math.random() * cantidad);
    } while(orden.indexOf(r) >=0)

    orden.push(r);
    document.getElementById("caja").innerHTML += `<div><img src="${imagenes[r]}"</div>`;
    if (order.length==imagenes.length){
      document.getElementById("boton2").disable=false;
    }
  }


function mostrar_todo() {
  document.getElementById("caja").innerHTML=""
  for(let k=imagenes.length-1;k>=0;k--){
    document.getElementById("caja").innerHTML+=
    `<div><img src=${imagenes[orden[k]]}`
  }

}
