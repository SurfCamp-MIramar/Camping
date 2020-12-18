
(function() {
    "use strict";

    document.addEventListener('DOMContentLoaded', function(){


// Cotizador
var precioDia = document.getElementById('precio-dia');
var precioNoche = document.getElementById('precio-noche');
var precioAlmuerzo = document.getElementById('precio-almuerzo');
// botones y divs
var listaEstadia = document.getElementById('lista-estadia');
var totalCotizado = document.getElementById('suma-total');
var calcular = document.getElementById('calcular');

// mapa
var map = document.getElementById('mapid');


calcular.addEventListener('click', cotizarPrecio);

function cotizarPrecio(event){
    event.preventDefault();
    if(precioDia.value === ''){
        alert('Para cotizar elegi al menos un dia o introduci un caracter valido');
        precioDia.focus();
    } else {
        var precio_Dias = parseInt(precioDia.value, 10)|| 0,
            precio_Noches = parseInt(precioNoche.value, 10)|| 0,
            precio_Almuerzos = parseInt(precioAlmuerzo.value, 10)|| 0;

    var totalPagar = (precio_Dias * 1500) + (precio_Noches * 1500 ) + (precio_Almuerzos * 2300);

            var listadoProductos = [];

            if(precio_Dias > 0){
                listadoProductos.push(precio_Dias + ' Dias');
            }
            if(precio_Noches > 0){
                listadoProductos.push(precio_Noches + ' Noches');
            }
            if(precio_Almuerzos > 0){
                listadoProductos.push(precio_Almuerzos + ' Noches + Comidas');
            }
            var resultado= '';

       listaEstadia.style.display = "block";
       listaEstadia.innerHTML = '';

       for(var i = 0; i < listadoProductos.length; i++) {
        listaEstadia.innerHTML += listadoProductos[i] + '<br>';
       }
       totalCotizado.innerHTML = "$ " + totalPagar.toFixed(2);

    }

}

}); // DOM 
})();