let body = document.getElementById('body');
let flex_container = document.createElement("div");
flex_container.className = "flex-container";
flex_container.id = "main_div";
body.appendChild(flex_container);
let table = document.createElement("table");
table.id = "main_table";
flex_container.appendChild(table);