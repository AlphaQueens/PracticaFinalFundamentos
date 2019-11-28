crear_tabla();
pintar(masters);

headerCentro = document.getElementById("centro");
headerEstudio = document.getElementById("grado");
headerDuracionPrecio = document.getElementById("precio");

headerCentro.addEventListener("click", e => (ordenar(1, headerCentro.innerHTML)));
headerEstudio.addEventListener("click", e => (ordenar(1, headerEstudio.innerHTML)));
headerDuracionPrecio.addEventListener("click", e => (ordenar(1, headerDuracionPrecio.innerHTML)));
window.onscroll = function() { scrollfunction() };