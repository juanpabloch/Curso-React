import React from 'react';

const Hero = ()=>{
    class Escribir {
        constructor(txtElement, words, wait = 3000) {
          this.txtElement = txtElement;
          this.words = words;
          this.txt = '';
          this.wordIndex = 0;
          this.wait = parseInt(wait, 10);
          this.type();
          this.isDeleting = false;
        }
      
        type() {
          // index lista palabra
          const current = this.wordIndex % this.words.length;
          // obtenemos el texto completo de la palabra
          const fullTxt = this.words[current];
      
          if(this.isDeleting) {
            // borramos de a 1 caracter
            this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
            // escribimos
            this.txt = fullTxt.substring(0, this.txt.length + 1);
          }
      
          // insertamos el texto en el elemento
          this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
      
          // velocidad de tipeo inicial
          let typeSpeed = 250;
      
          if(this.isDeleting) {
            typeSpeed /= 2;
          }
      
          // If word is complete
          if(!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
          } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
          }
      
          setTimeout(() => this.type(), typeSpeed);
        }
      }
      
      
     //iniciar escritura al cargar la pagina
      document.addEventListener('DOMContentLoaded', init);
      
      function init() {
        const txtElement = document.querySelector('.elementoTexto');
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
    
    
        new Escribir(txtElement, words, wait);
      }
    return(
        <div>
            <div className="header">
                <h1 className="elementoTexto" data-wait="3000" data-words='["bienvenidos", "a React!"]'></h1>
                <h2>Diplomatura en React</h2>
            </div>
            <div className="hero">
                <p>ReactJS es una herramienta muy popular actualmente para 
                    construir vistosas y potentes interfaces de usuario.</p>
                <p>Con esta diplomatura se busca que los alumnos comprendan los fundamentos de ReactJS.</p>
                <p>Sean capaces de realizar la instalación de la herramienta.</p> 
                <p>Y obtener conocimientos avanzados sobre el lenguaje JSX.</p>
            </div>
        </div>
    )
}

export default Hero;