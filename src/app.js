
import { LitElement, html } from 'lit-element'
import { TituloHeader } from './css/styles'
import './components/cajas'

class MyApp extends LitElement {
    static get styles(){
        return [
            TituloHeader,
            // css`
            // :host { 
            //     display: block;
            //     border: 1px solid black;
            // }`
        ]
    }

  render() {
    return html`
        <div class="contenedor">
            <h1 class="title center">Adivina tu Números</h1>
            <p class="center parrafo">Piensa en un número del 1 al 31 y selecciona en cualquier parte de la caja donde veas que se encuentra y luego da click en el boton :)</p>
        </div>
        <div class="contenedor">
            <caja-comp></caja-comp>
        </div>
    `
  }
  
}

customElements.define('my-app', MyApp);