crear_tabla();
pintar(masters);

headerCentro = document.getElementById("centro");
headerContacto = document.getElementById("contacto");
headerEstudio = document.getElementById("grado");
headerDuracionPrecio = document.getElementById("precio");

headerCentro.addEventListener("click", e => (ordenar(1, headerCentro.innerHTML)));
headerContacto.addEventListener("click", e => (ordenar(1, headerContacto.innerHTML)));
headerEstudio.addEventListener("click", e => (ordenar(1, headerEstudio.innerHTML)));
headerDuracionPrecio.addEventListener("click", e => (ordenar(1, headerDuracionPrecio.innerHTML)));
window.onscroll = function() { scrollfunction() };