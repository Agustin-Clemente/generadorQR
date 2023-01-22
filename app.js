const contenedorQR= document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');
const QR= new QRCode(contenedorQR);

formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    QR.makeCode(formulario.url.value);
});




//new QRCode(contenedorQR, 'https://miportfolio-b96db.web.app/portfolio');

