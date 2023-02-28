'use strict'

window.addEventListener('load', function(){

    var formulario = document.querySelector('#form-contacto');

    formulario.addEventListener('submit', function(){
        


    var enviarForm = document.querySelector('#formEnviar');
    var errorForm = document.querySelector('#errorForm');

    var numero = 5492291518654;
    var nombre = document.querySelector('#nombre').value
    var apellido = document.querySelector('#apellido').value;
    var mensaje = document.querySelector('#textarea').value;
    
            if (nombre.trim() == null || nombre.trim().length == 0) {
            errorForm.style.display = 'block';
            errorForm.innerHTML = "Por favor, introducí tu nombre correctamente";
            return false;
        } else if (apellido.trim() == null || apellido.trim().length == 0) {
            errorForm.innerHTML = "Por favor, Introducí tu apellido correctamente";
             errorForm.style.display = 'block';
            return false;
        }
        else if (mensaje.trim() == null || mensaje.trim().length == 0){
            errorForm.style.display = 'block';
            errorForm.innerHTML = "Escribe tu mensaje";
            return false;
        } 
        else {
            errorForm.style.display = 'none';
        }
        const enviarMensaje = () => {
            var win = window.open(`https://wa.me/${numero}?text=Hola%20soy%20${nombre}%20${apellido}, Consulta:%20${mensaje}`, '_blank');
        }

           enviarForm.addEventListener('click', enviarMensaje);
    });

formulario.event.preventDefault();

});


