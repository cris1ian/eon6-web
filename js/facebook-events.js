const btnEnviar = document.getElementById('submmit');

btnEnviar.addEventListener('click', function() {
    fbq('track', 'CompleteRegistration');
});