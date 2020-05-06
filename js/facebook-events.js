//declaraciones de los elementos 
const btnCotizaTuProyecto = document.getElementById('cotizaTuProyecto');
const btnServicios = document.getElementById('servicios');
const btnQuienesSomos = document.getElementById('quienesSomos');
const btnEnviar = document.getElementById('submmit');
const btnSobreFijo = document.getElementById('sobreFijo');
const btnWhatsFijo = document.getElementById('whatsFijo');


//Funciones

btnCotizaTuProyecto.addEventListener('click', function() {
    fbq('trackCustom', 'CotizaTuProyecto');
}, false);

btnServicios.addEventListener('click', function() {
    fbq('trackCustom', 'Servicios');
}, false);

btnQuienesSomos.addEventListener('click', function() {
    fbq('trackCustom', 'QuienesSomos');
}, false);

btnEnviar.addEventListener('click', function() {
    fbq('trackCustom', 'ClickEnviar');
}, false);

btnSobreFijo.addEventListener('click', function() {
    fbq('trackCustom', 'ClickSobreFijo');
}, false);

btnWhatsFijo.addEventListener('click', function() {
    fbq('trackCustom', 'ClickWhatsFijo');
}, false);


function avtivateEventSobre() {
    fbq('trackCustom', 'ClickSobreFlotante');
}

function avtivateEventWhats() {
    fbq('trackCustom', 'ClickWahtsFlotante');
}

function clickRedes(red) {
    fbq('trackCustom', 'ClickRedesFTI', { red: `${red}` });
}

// fbq('trackCustom', 'ShareDiscount', { promotion: 'share_discount_10%' });