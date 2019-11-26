let body = document.getElementsByTagName('body')[0];
let flex_container = document.createElement("div");
flex_container.className = "flex-container";
flex_container.id = "main_div";
body.appendChild(flex_container);
let table = document.createElement("table");
table.id = "main_table";
flex_container.appendChild(table);


for (let i = 0;i < grados.length;i++)
{
  console.log(grados[i].centro);
  console.log(grados[i].logo);
  console.log(grados[i].correo);
  console.log(grados[i].telefono);
  console.log(grados[i].web);
  console.log(grados[i].estudio);
  console.log(grados[i].duracion);
  console.log(grados[i].precio);
}


for (let i = 0;i < masters.length;i++)
{
  console.log(masters[i].centro);
  console.log(masters[i].logo);
  console.log(masters[i].correo);
  console.log(masters[i].telefono);
  console.log(masters[i].web);
  console.log(masters[i].estudio);
  console.log(masters[i].duracion);
  console.log(masters[i].precio);
}

function pintar() {};

function ordenar(direccion, objeto_a_ordenar) {};
