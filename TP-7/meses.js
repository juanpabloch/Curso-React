const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
const diasDelMes= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/* dividimos los meses en 2 arrays  */

let listaMeses30 = [];

let listaMeses31 = [];


for (let i = 0; i < meses.length; i++) {
    if(diasDelMes[i] === 30){
        listaMeses30.push(meses[i]);
    }
    if(diasDelMes[i] === 31){
        listaMeses31.push(meses[i]);
    }
}


/* boton repetir */
const repetir = document.querySelector("#repetir-btn");
repetir.addEventListener("click", e=>{
    reset()
})

/* desplegamos los meses en la pagina */
const meses30 = document.querySelector("#meses30");
const meses31 = document.querySelector("#meses31");


function desplegarMeses(){    
    addItem(listaMeses30, meses30);
    addItem(listaMeses31, meses31);

    const arrayMeses30 = meses30.querySelectorAll("p");
    const arrayMeses31 = meses31.querySelectorAll("p");

    let i = 0;

    const draw = setInterval(() => {
        arrayMeses30[i].classList.add("center");
        i++;
        if (i === listaMeses30.length) {
            clearInterval(draw);
        }
    }, 1000);


    const timeout = (listaMeses30.length * 1000) + 500;


    setTimeout(() => {
        let j = 0;

        const draw1 = setInterval(() => {
            arrayMeses31[j].classList.add("center");
            j++;
            if (j > listaMeses31.length-1) {
                clearInterval(draw1);
                mostarMensaje();
            }
        }, 1000);

        
    }, timeout);
};



function addItem(meses, dias){
    meses.forEach(item => {
        const p = document.createElement("p");
        p.classList.add("izq");
        p.textContent = item;
        dias.appendChild(p);
    });
}

function mostarMensaje(){
    document.querySelector("#mensaje").style.display = "block";
}

function reset(){
    location.reload();
}

desplegarMeses();