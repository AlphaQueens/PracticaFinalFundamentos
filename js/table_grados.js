crear_tabla();
pintar(grados);

headerCentro = document.getElementById("centro");
headerDuracionPrecio = document.getElementById("precio");

headerCentro.addEventListener("click", e => (ordenar(1, headerCentro.innerHTML)));
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
