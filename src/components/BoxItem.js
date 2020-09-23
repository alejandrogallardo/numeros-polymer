import { LitElement, html } from 'lit-element'
import { ItemStyle } from './styles/item'

class BoxItem extends LitElement {
    static get styles(){
        return [
            ItemStyle,
        ]
    }

    static get properties() {
        return {
          elemento: { type: Array },
        };
      }

    constructor() {
        super();
        this.uno = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];
      }

    render() {
        return html`
            <div class="item">${this.elemento}</div>
        `
    }
  
}

customElements.define('box-item', BoxItem);