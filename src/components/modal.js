import { LitElement, html } from 'lit-element'
import { ModalStyle } from './styles/modalss'

class Modal extends LitElement {
    static get styles(){
        return [
            ModalStyle,
        ]
    }

  render() {
    return html`
    <div class="modal">
        <div class="modal-content">
            <p class="textoModal"></p>
        </div>
    </div>
    `
  }
  
}

customElements.define('my-modal', Modal);