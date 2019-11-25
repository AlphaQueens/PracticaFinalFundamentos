var body = document.getElementsByTagName('body')[0];
var div = document.createElement('div').className = "flex-container";
var main_tbl = document.createElement('table').id = "main_table";
console.log(body);
body.appendChild(div);
div.appendChild(main_tbl);