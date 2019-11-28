crear_tabla();
pintar(grados);

headerCentro = document.getElementById("centro");
headerEstudio = document.getElementById("grado");
headerDuracionPrecio = document.getElementById("precio");

headerCentro.addEventListener("click", e => (ordenar(1, headerCentro.innerHTML)));
headerEstudio.addEventListener("click", e => (ordenar(1, headerEstudio.innerHTML)));
headerDuracionPrecio.addEventListener("click", e => (ordenar(1, headerDuracionPrecio.innerHTML)));

headerCentro.addEventListener("mouseenter", e => {

    document.getElementById("centro").style.backgroundColor = "#366379";
});
headerEstudio.addEventListener("mouseenter", e => {

    document.getElementById("grado").style.backgroundColor = "#366379";
});
headerDuracionPrecio.addEventListener("mouseenter", e => {

    document.getElementById("precio").style.backgroundColor = "#366379";
});

headerCentro.addEventListener("mouseleave", e => {

    document.getElementById("centro").style.backgroundColor = "#6DC7F3";
});
headerEstudio.addEventListener("mouseleave", e => {

    document.getElementById("grado").style.backgroundColor = "#6DC7F3";
});
headerDuracionPrecio.addEventListener("mouseleave", e => {

    document.getElementById("precio").style.backgroundColor = "#6DC7F3";
});

window.onscroll = function() { scrollfunction() };