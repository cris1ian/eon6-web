//obtener los datos
console.log("funcionaaa");


const sendMail = () => {

    console.log("mandanto el mail");

    let correo = document.getElementById('formCorreo').value;
    let nombre = document.getElementById('formNombre').value;
    let telefono = document.getElementById('formTelefono').value;
    let mensaje = document.getElementById('formMensaje').value;

    console.log("campos", correo, nombre, telefono, mensaje);

    Email.send({
        // SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",    
        To: 'contacto@eon6.tech',
        From: correo,
        Subject: "Presupuesto/consulta",
        Body: `telefono:   ${telefono}` + mensaje
    }).then((message) => {
        alert(message);
    });


}