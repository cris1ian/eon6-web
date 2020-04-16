//obtener los datos

var service_id = "default_service";
var template_id = "template_vIjNb36X";

const sendMail = () => {

    console.log("mandanto el mail");

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
        }, function(error) {
            console.log('FAILED...', error);
        });


}