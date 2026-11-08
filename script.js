const reloj = document.getElementById('reloj');

function actualizar() {
    reloj.textContent = new Date().toLocaleDateString();
}

actualizar();
setTimeout(actualizar, 1000);


