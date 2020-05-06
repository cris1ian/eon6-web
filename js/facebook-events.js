//declaraciones de los elementos 
const btnCotizaTuProyecto = document.getElementById('cotizaTuProyecto');
const btnServicios = document.getElementById('servicios');
const btnQuienesSomos = document.getElementById('quienesSomos');
const btnEnviar = document.getElementById('submmit');
const btnSobreFijo = document.getElementById('sobreFijo');
const btnWhatsFijo = document.getElementById('whatsFijo');
const btnSobreFlotante = document.getElementById('sobreFlotante');
const btnWahtsFlotante = document.getElementById('wahtsFlotante');

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

btnSobreFlotante.addEventListener('click', function() {
    fbq('trackCustom', 'ClickSobreFlotante');
}, false);

btnWahtsFlotante.addEventListener('click', function() {
    fbq('trackCustom', 'ClickWahtsFlotante');
}, false);



// fbq('trackCustom', 'ShareDiscount', { promotion: 'share_discount_10%' });