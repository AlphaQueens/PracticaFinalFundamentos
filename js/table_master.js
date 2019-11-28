crear_tabla();
pintar_masters();
window.onscroll = function() { scrollfunction() };
document.getElementsByTagName("h1")[0].addEventListener("mouseenter", function() {
    document.getElementById("navbar").style.top = "0";

});
document.getElementsByTagName("h1")[0].addEventListener("mouseleave", function() {
    document.getElementById("navbar").style.top = "-50";
})