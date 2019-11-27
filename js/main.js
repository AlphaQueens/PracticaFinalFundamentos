import { grados } from "grados.js";
import { masters } from "masters.js";
let body = document.getElementsByTagName('body')[0];
let flex_container = document.createElement("div");
flex_container.className = "flex-container";
flex_container.id = "main_div";
body.appendChild(flex_container);
let table = document.createElement("table");
table.id = "main_table";
flex_container.appendChild(table);

function pintar() {
    var thead = document.createElement("thead");
    table.appendChild();
    var keys = Object.keys(grados).array.forEach(k => {
        console.log(k);
    });

}
pintar();

function ordenar(direccion, objeto_a_ordenar) {


};