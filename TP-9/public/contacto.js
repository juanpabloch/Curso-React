const form = document.querySelector('#form');

for (let i = 0; i < form.elements.length - 1; i++) {
    form.elements[i].value = ""
}

//validaciones
const colores = (target)=>{
    if(target.value){
        target.classList.remove("red")
        target.classList.add("green")
    }else{
        target.classList.remove("green")
        target.classList.add("red")
    }
}

form.nombre.addEventListener("keyup", e=>{
    colores(e.target)
})

form.apellido.addEventListener("keyup", e=>{
    colores(e.target)
})

form.edad.addEventListener("change", e=>{
    colores(e.target)
})

form.telefono.addEventListener("keyup", e=>{
    console.log(typeof Number(e.target.value));
    if(e.target.value && /^[0-9]+$/.test(e.target.value)){
        e.target.classList.remove("red")
        e.target.classList.add("green")
    }else{
        e.target.classList.remove("green")
        e.target.classList.add("red")
    }
})

form.nacimiento.addEventListener("change", e=>{
    colores(e.target)
})

form.residencia.addEventListener("change", e=>{
    colores(e.target)
})
