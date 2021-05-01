const renderExito = (info)=>{
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exito</title>
        <link rel="stylesheet" href="style.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet">
    </head>
    <body>
        <div class="container-exito">
            <div class="datos">
                <h1>Formulario <span class="titulo-verde">enviado!</span></h1>
                <h3>A continuacion precentamos los datos recibidos:</h3>
                <div class="info">
                    <p>Nombre completo: <span>${info.nombre} ${info.apellido}</span></p>
                    <p>Edad: <span>${info.edad}</span></p>
                    <p>Num. Telefono: <span>${info.telefono}</span></p>
                    <p>Pais de Nacimiento: <span>${info.nacimiento}</span></p>
                    <p>Pais de Recidencia: <span>${info.residencia}</span></p>
                </div>
            </div>
            <div class="imagen-exito">
                <img src="img/sent2.svg" alt="imagen de exito">
            </div>
            
        </div>
        <div class="volver">
            <a class="volver-link" href="/">volver</a>
        </div>
    </body>
    </html>

    `
}


const validarInfo =(info)=>{
    let nombreError = validarSoloLetras(info.nombre);
    let apellidoError = validarSoloLetras(info.apellido);
    let numTelError =  validarSoloNumero(info.telefono);

    if(nombreError || apellidoError || numTelError){
        return {
            msg: "error en los datos volver a intentar",
            nombre: nombreError,
            apellido: apellidoError,
            telefono: numTelError
        }
    }
}

const validarSoloLetras = (nombre)=>{
    if(!/^[a-z ]+$/i.test(nombre)){
        return "debe contener solo letras"
    }else{
        return false
    }
}

const validarSoloNumero = (numero)=>{
    if(!/^[0-9]+$/.test(numero)){
        return "debe contener solo numeros sin espacios"
    }else{
        return false
    }
}


module.exports.exito = renderExito;
module.exports.validar = validarInfo;