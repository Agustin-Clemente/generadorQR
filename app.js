const contenedorQR= document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');
const QR= new QRCode(contenedorQR);
const botonSwitch= document.querySelector('#switch');


formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    QR.makeCode(formulario.url.value);
});

function irALaPagina(){
    window.open(formulario.url.value,'_blank')
}


botonSwitch.addEventListener('click', ()=> {
    document.body.classList.toggle('dark');
    botonSwitch.classList.toggle('active');

    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    }else{
        localStorage.setItem('dark-mode', 'false');
    }
})

if(localStorage.getItem('dark-mode')=== 'true'){
    document.body.classList.add('dark');
    botonSwitch.classList.add('active');
}else{
    document.body.classList.remove('dark');
    botonSwitch.classList.remove('active');
}


//new QRCode(contenedorQR, 'https://miportfolio-b96db.web.app/portfolio');

