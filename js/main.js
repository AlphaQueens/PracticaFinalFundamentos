let body = document.getElementsByTagName('body')[0];


function crear_tabla() {
    let flex_container = document.createElement("div");
    flex_container.id = "main_div";
    flex_container.clasName = "flex-container";
    body.appendChild(flex_container);

    let table_grados = document.createElement("table");
    table_grados.id = "table_grados";
    table_grados.setAttribute('border', 1);
    flex_container.appendChild(table_grados);

    let table_masters = document.createElement("table");
    table_masters.id = "table_masters";
    table_masters.setAttribute('border', 1);
    flex_container.appendChild(table_masters);
}

function pintar_headers() {
    let row_headers = document.createElement('tr');

    let headerCentro = document.createElement('th');
    let headerContacto = document.createElement('th');
    let headerEstudio = document.createElement('th');
    let headerDuracionPrecio = document.createElement('th');

    headerContacto.scope = "col";
    headerCentro.scope = "col";
    headerEstudio.scope = "col";
    headerDuracionPrecio.scope = "col";

    headerCentro.innerHTML = 'CENTRO';
    headerContacto.innerHTML = 'CONTACTO';
    headerEstudio.innerHTML = 'GRADO';
    headerDuracionPrecio.innerHTML = 'DURACIÓN Y PRECIO';

    //headerCentro.addEventListener()

    row_headers.appendChild(headerCentro);
    row_headers.appendChild(headerContacto);
    row_headers.appendChild(headerEstudio);
    row_headers.appendChild(headerDuracionPrecio);
    return row_headers;
}

function pintar_grados() {
    var table_grados = document.getElementById("table_grados");
    table_grados.appendChild(pintar_headers());
    for (let i = 0; i < grados.length; i++) {
        let row = document.createElement('tr');
        table_grados.appendChild(row);


        var centroTd = document.createElement('td');
        var contactoTd = document.createElement('td');
        var gradoTd = document.createElement('td');
        var duracionPrecioTd = document.createElement('td');

        var centro = document.createElement('p');
        centro.innerHTML = grados[i].centro;
        centroTd.appendChild(centro);

        var img = document.createElement('img');
        img.setAttribute('src', grados[i].logo);
        img.setAttribute('width', 150);
        img.setAttribute('height', 150);
        centroTd.appendChild(img);

        var correo = document.createElement('p');
        var a = document.createElement('a');
        a.href = "mailto:" + grados[i].correo;
        a.innerHTML = grados[i].correo;
        correo.appendChild(a);
        contactoTd.appendChild(correo);

        var telefono = document.createElement('p');
        telefono.innerHTML = grados[i].telefono;
        contactoTd.appendChild(telefono);

        var web = document.createElement('p');
        var a = document.createElement('a');
        a.href = grados[i].web;
        a.innerHTML = 'Web';
        web.appendChild(a);
        contactoTd.appendChild(web);

        gradoTd.innerHTML = grados[i].estudio;

        var duracion = document.createElement('p');
        duracion.innerHTML = grados[i].duracion;
        duracionPrecioTd.appendChild(duracion);

        var precio = document.createElement('p');
        precio.innerHTML = grados[i].precio;
        duracionPrecioTd.appendChild(precio);

        row.appendChild(centroTd);
        row.appendChild(contactoTd);
        row.appendChild(gradoTd);
        row.appendChild(duracionPrecioTd);
    }
};

function pintar_masters() {
    var table_master = document.getElementById("table_grados");
    table_master.appendChild(pintar_headers());
    for (let i = 0; i < masters.length; i++) {
        let row = document.createElement('tr');
        table_masters.appendChild(row);

        var centroTd = document.createElement('td');
        var contactoTd = document.createElement('td');
        var gradoTd = document.createElement('td');
        var duracionPrecioTd = document.createElement('td');

        var centro = document.createElement('p');
        centro.innerHTML = masters[i].centro;
        centroTd.appendChild(centro);

        var img = document.createElement('img');
        img.setAttribute('src', masters[i].logo);
        img.setAttribute('width', 150);
        img.setAttribute('height', 150);
        centroTd.appendChild(img);

        var correo = document.createElement('p');
        var a = document.createElement('a');
        a.href = "mailto:" + masters[i].correo;
        a.innerHTML = masters[i].correo;
        correo.appendChild(a);
        contactoTd.appendChild(correo);

        var telefono = document.createElement('p');
        telefono.innerHTML = masters[i].telefono;
        contactoTd.appendChild(telefono);

        var web = document.createElement('p');
        a = document.createElement('a');
        a.href = masters[i].web;
        a.innerHTML = 'Web';
        web.appendChild(a);
        contactoTd.appendChild(web);

        gradoTd.innerHTML = masters[i].estudio;

        var duracion = document.createElement('p');
        duracion.innerHTML = masters[i].duracion;
        duracionPrecioTd.appendChild(duracion);

        var precio = document.createElement('p');
        precio.innerHTML = masters[i].precio;
        duracionPrecioTd.appendChild(precio);

        row.appendChild(centroTd);
        row.appendChild(contactoTd);
        row.appendChild(gradoTd);
        row.appendChild(duracionPrecioTd);
    }
}

function ordenar() {



}
window.onscroll = function() { scrollfunction() };

function scrollfunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}