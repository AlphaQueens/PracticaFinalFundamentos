crear_tabla();
pintar_grados();
window.onscroll = function() { scrollfunction() };
document.getElementsByTagName("h1")[0].addEventListener("mouseenter", e => {
    document.getElementById("navbar").style.top = "0";

});
document.getElementsByTagName("h1")[0].addEventListener("mouseleave", e => {
    document.getElementById("navbar").style.top = "-50";
    console.log("yosta es un puto")
})