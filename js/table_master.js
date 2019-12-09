crear_tabla();
pintar(masters);

headerCentro = document.getElementById("centro");
headerEstudio = document.getElementById("grado");
headerDuracionPrecio = document.getElementById("precio");

headerCentro.addEventListener("click", e => (ordenar(1, headerCentro.innerHTML)));
headerEstudio.addEventListener("click", e => (ordenar(1, headerEstudio.innerHTML)));
headerDuracionPrecio.addEventListener("click", e => (ordenar(1, headerDuracionPrecio.innerHTML)));
headerCentro.addEventListener("mouseenter", e => {

    document.getElementById("centro").style.backgroundColor = "#728cb2";
});
headerDuracionPrecio.addEventListener("mouseenter", e => {

    document.getElementById("precio").style.backgroundColor = "#728cb2";
});

headerCentro.addEventListener("mouseleave", e => {

    document.getElementById("centro").style.backgroundColor = "#2b2d2e";
});
headerDuracionPrecio.addEventListener("mouseleave", e => {

    document.getElementById("precio").style.backgroundColor = "#2b2d2e";
});

window.onscroll = function() { scrollfunction() };
