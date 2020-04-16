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

const sendMail = () => {

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
        }, function(error) {
            console.log('FAILED...', error);
            msgErr.style.display = 'block';
            msgOk.style.display = 'none';

        });


}