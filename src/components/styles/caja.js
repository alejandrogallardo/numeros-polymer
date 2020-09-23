import { css } from 'lit-element';

export const CajasStyle = css `
    .box {
        width: 168px;
        height: 168px;
        margin: 15px;
        border: 1px solid blue;
        cursor: pointer;
        
    }
    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .d-flex {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .foco {
        background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    }
    .center {
        text-align: center;
    }
    .btn {
        margin-top: 30px;
        padding: 15px 30px;
    }
`;