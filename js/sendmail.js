//obtener los datos

var service_id = "default_service";
var template_id = "template_vIjNb36X";

const enviandoBtn = document.getElementById('enviando-btn');
const enviarBtn = document.getElementById('enviar-btn');
const msgOk = document.getElementById('msg-ok');
const msgErr = document.getElementById('msg-err');

// enviandoBtn.style.visibility = 'hidden';
enviandoBtn.style.display = 'none';
enviarBtn.style.display = 'block';

msgOk.style.display = 'none';
msgErr.style.display = 'none';


var submit = document.getElementById("submmit");
// submit.addEventListener("submit", sendMail);



var form = document.getElementById("form");

// var submit = document.getElementById("submmit");

//!no tokes nada porque esta mierda esta todo loco

submit.addEventListener('click', function(event) {
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        console.log("No se valido");
    }
    form.classList.add('was-validated');

    if (form.checkValidity() === true) {
        event.preventDefault();
        event.stopPropagation();
        console.log("Si se valido");
        sendMail();
    }
    form.classList.add('was-validated');
}, false);


function sendMail() {

    console.log("mandanto el mail");


    //muestro el boton el boton    
    // enviandoBtn.style.visibility = 'visible';
    enviandoBtn.style.display = 'block';
    enviarBtn.style.display = 'none';
    msgOk.style.display = 'none';
    msgErr.style.display = 'none';

    let correo = document.getElementById('formCorreo').value;
    let nombre = document.getElementById('formNombre').value;
    let telefono = document.getElementById('formTelefono').value;
    let mensaje = document.getElementById('formMensaje').value;

    var template_params = {
        "reply_to": correo,
        "from_name": nombre,
        "tel": telefono,
        "to_name": "Eones",
        "message_html": mensaje,
    }



    emailjs.send(service_id, template_id, template_params)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('formCorreo').value = "";
            document.getElementById('formNombre').value = "";
            document.getElementById('formTelefono').value = "";
            document.getElementById('formMensaje').value = "";
            // enviandoBtn.style.visibility = 'hidden';
            enviandoBtn.style.display = 'none';
            enviarBtn.style.display = 'block';
            msgOk.style.display = 'block';
            msgErr.style.display = 'neno';
            form.classList.remove('was-validated');
        }, function(error) {
            console.log('FAILED...', error);
            msgErr.style.display = 'block';
            msgOk.style.display = 'none';
            enviandoBtn.style.display = 'none';
            enviarBtn.style.display = 'block';

        });


}