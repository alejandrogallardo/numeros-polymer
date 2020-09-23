import { css } from 'lit-element';

export const ModalStyle = css `
.modal {
    display: none; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4);
  }
  .modal-content {
    background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
    margin: 15% auto; 
    padding: 20px;
    border: 5px solid rgb(255, 255, 255);
    width: 25%; 
    border-radius: 25px;
    text-align: center;
    font-family: 'Eater', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: rgb(139, 83, 18);
  }
  .M-icono i {
    color: white;
    font-size: 50px;
  }    
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  hr {
    border: 2px solid rgb(82, 55, 30);
  }
`;