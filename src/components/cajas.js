import { LitElement, html } from 'lit-element'
import { CajasStyle } from './styles/caja'
import { ModalStyle } from './styles/modalss'
import './BoxItem'
// import './modal'

class CajaComp extends LitElement {
    static get styles(){
        return [
            CajasStyle,
            ModalStyle,
        ]
    }

    static get properties() {
        return {
          numero: { type: Number },
        };
      }

    constructor() {
        super();
        this.uno = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];
        this.dos = [2, 3, 6, 7,10, 11, 14, 15,18, 19, 22, 23,26, 27, 30, 31];
        this.tres = [4, 5, 6, 7,12, 13, 14, 15,20, 21, 22, 23,28, 29, 30, 31];
        this.cuatro = [8, 9, 10, 11,12, 13, 14, 15,24, 25, 26, 27,28, 29, 30, 31];
        this.cinco = [16, 17, 18, 19,20, 21, 22, 23,24, 25, 26, 27,28, 29, 30, 31];
        this.xValores = [];
        this.numero;
      }
  render() {
    return html`
        <div class="d-flex">
            <div class="box" id="uno" @click=${this.setElemento}>
                <div class="row">
                    ${this.uno.map(i => html`<box-item elemento=${i}></box-item>`)}
                </div>
            </div>
            <div class="box" id="dos" @click=${this.setElemento}>
                <div class="row">
                    ${this.dos.map(i => html`<box-item elemento=${i}></box-item>`)}
                </div>
            </div>
            <div class="box" id="tres" @click=${this.setElemento}>
                <div class="row">
                    ${this.tres.map(i => html`<box-item elemento=${i}></box-item>`)}
                </div>
            </div>
            <div class="box" id="cuatro" @click=${this.setElemento}>
                <div class="row">
                    ${this.cuatro.map(i => html`<box-item elemento=${i}></box-item>`)}
                </div>
            </div>
            <div class="box" id="cinco" @click=${this.setElemento}>
                <div class="row">
                    ${this.cinco.map(i => html`<box-item elemento=${i}></box-item>`)}
                </div>
            </div>
        </div>

        
        <div class="center">
            <button class="btn" @click=${this.sumar}>Ver Número</button>  
            <small><p>Hecho con Web Components Lit-Elements <3 </p></small>  
        </div>
        
        <div class="modal" id="myModal">
            <div class="modal-content">
                <p class="textoModal">${this.numero}</p>
            </div>
        </div>
    `
  }

  setElemento(e){
    e.path[4].id
     if (e.path[4].id == 'uno'){
        this.xValores.push(1);
        this.shadowRoot.querySelector('#uno').classList.add('foco')
    }
    
    if (e.path[4].id == 'dos'){
        this.xValores.push(2);
        this.shadowRoot.querySelector('#dos').classList.add('foco')
    }
    
    if (e.path[4].id == 'tres'){
        this.xValores.push(4);
        this.shadowRoot.querySelector('#tres').classList.add('foco')
    }
    
    if (e.path[4].id == 'cuatro'){
        this.xValores.push(8);
        this.shadowRoot.querySelector('#cuatro').classList.add('foco')
    }
    
    if (e.path[4].id == 'cinco'){
        this.xValores.push(16);
        this.shadowRoot.querySelector('#cinco').classList.add('foco')
    }
  }

  sumar(){
    
    let resultado = 0
    this.xValores.forEach( num => {
        
        this.numero = resultado+=num

        let modal = this.shadowRoot.getElementById('myModal')
        modal.style.display = "block";
        let uno = this.shadowRoot.getElementById('uno')
        let dos = this.shadowRoot.getElementById('dos')
        let tres = this.shadowRoot.getElementById('tres')
        let cuatro = this.shadowRoot.getElementById('cuatro')
        let cinco = this.shadowRoot.getElementById('cinco')
        setTimeout(function(){
            modal.style.display = "none";
            uno.classList.remove('foco')
            dos.classList.remove('foco')
            tres.classList.remove('foco')
            cuatro.classList.remove('foco')
            cinco.classList.remove('foco')
        },3000);
    })
    this.xValores = []
  }
        
}

customElements.define('caja-comp', CajaComp);