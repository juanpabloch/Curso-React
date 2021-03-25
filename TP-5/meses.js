const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
const diasDelMes= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


for (let i = 0; i < meses.length; i++) {
    if(diasDelMes[i] >= 30){
        console.log(meses[i] + " tiene " + diasDelMes[i] + " dias")
    }
}

//hola 