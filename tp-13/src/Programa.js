import React from 'react'


const Programa = ()=>{
//     const $botonPrograma = document.querySelector(".programa-btn");
//     const $temas = document.querySelector(".temas");

//     const esconderListas = ()=>{
//         document.querySelectorAll('.lista').forEach(lista=>{
//             lista.classList.remove('mostrar-lista')
//         });
//     }

//     const mostrarProgramas = ()=>{
//         $temas.classList.toggle("hide")
//         esconderListas()
//         if($temas.classList.contains("hide")){
//             window.scrollTo(0, 1);
//             return
//         }
//         window.scrollTo(0, 1000);
//     }


    // const mostrarTemas = (e)=>{
    //     if(e.target.classList[0] === "titulo-btn"){
    //         // esconderListas();
    //         const temas = document.querySelector(`.${e.target.dataset.lista}`);
    //         temas.classList.toggle('mostrar-lista');
    //         if(temas.classList.contains('mostrar-lista')){
    //             esconderListas();
    //             temas.classList.toggle('mostrar-lista');
    //         }
    //     }
    // }

    // $botonPrograma.addEventListener("click", e=>{
    //     $temas.classList.toggle("hide")
    //     esconderListas()
    //     if($temas.classList.contains("hide")){
    //         window.scrollTo(0, 1);
    //         return
    //     }
    //     window.scrollTo(0, 1000);
    // })

    // $temas.addEventListener("click", e=>{
    //     if(e.target.classList[0] === "titulo-btn"){
    //         // esconderListas();
    //         const temas = document.querySelector(`.${e.target.dataset.lista}`);
    //         temas.classList.toggle('mostrar-lista');
    //         if(temas.classList.contains('mostrar-lista')){
    //             esconderListas();
    //             temas.classList.toggle('mostrar-lista');
    //         }
    //     }
    // })

    const load = ()=>{
        const $botonPrograma = document.querySelector(".programa-btn");
        const $temas = document.querySelector(".temas");

        const esconderListas = ()=>{
            document.querySelectorAll('.lista').forEach(lista=>{
            lista.classList.remove('mostrar-lista')
            });
        }

        $botonPrograma.addEventListener("click", e=>{
            $temas.classList.toggle("hide")
            esconderListas()
            if($temas.classList.contains("hide")){
                window.scrollTo(0, 1);
                return
            }
            window.scrollTo(0, 1000);
        })
    
        $temas.addEventListener("click", e=>{
            if(e.target.classList[0] === "titulo-btn"){
                // esconderListas();
                const temas = document.querySelector(`.${e.target.dataset.lista}`);
                temas.classList.toggle('mostrar-lista');
                if(temas.classList.contains('mostrar-lista')){
                    esconderListas();
                    temas.classList.toggle('mostrar-lista');
                }
            }
        })
    }

    document.addEventListener('DOMContentLoaded', load)

    return(
        <div>
            <div className="programa">
            <button className="programa-btn">Programa</button>
            
            <div className="temas hide">

                <div id="listado">
                    <h3 className="titulo-btn" data-lista="lista1">Unidad 1: Fundamentos de React JS, Instalación e Introducción a JSX</h3>
                    <ul className="lista lista1">
                        <li>Fundamentos de React JS</li>
                        <li>Instalación</li>
                        <li>Línea de comandos de React</li>
                        <li>Estructura de un proyecto React</li>
                        <li>Introducción a JSX</li>
                        <li>Ejemplo</li>
                        <li>Trabajo Práctico</li>
                    </ul>
                </div>
                
                <div id="listado">
                    <h3 className="titulo-btn" data-lista="lista2">Unidad 2: Componentes, estados y eventos</h3>
                    <ul className="lista lista2">
                        <li>Concepto de Componente</li>
                        <li>Creación de componentes</li>
                        <li>Comunicación entre componentes</li>
                        <li>Estados</li>
                        <li>Eventos</li>
                        <li>Ejemplo</li>
                        <li>Trabajo Práctico</li>
                    </ul>
                </div>

                <div id="listado">
                    <h3 className="titulo-btn" data-lista="lista3">Unidad 3: Redux</h3>
                    <ul className="lista lista3">
                        <li>Concepto de Redux</li>
                        <li>Ventajas del uso de redux</li>
                        <li>Uso de redux en un proyecto React</li>
                        <li>Implementación de redux en React</li>
                        <li>Ejemplo</li>
                        <li>Trabajo Práctico</li>
                    </ul>
                </div>

                <div id="listado">
                    <h3 className="titulo-btn" data-lista="lista4">Unidad 4: Ciclo de vida + conexión con el servidor</h3>
                    <ul className="lista lista4">
                        <li>Introducción al ciclo de vida de los componentes</li>
                        <li>Redefinición de métodos básicos</li>
                        <li>Introducción a AXIOS</li>
                        <li>Conexión con el servidor</li>
                        <li>Ejemplo</li>
                        <li>Trabajo Práctico</li>
                    </ul>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Programa