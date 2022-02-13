import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #FAFAFA;
        --shape #FFFFFF;

        --green: #33c645;
        --red: #E52E4D;
        --blue: #5429CC;
        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;
        
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }
        @media (max-width: 768px) {
            font-size: 87.5%; //14px
        }
        // 1 rem = font-size
        
}

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        
    }

    body, input,button,textarea{
        font-family:'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2,h3,h4,h5,h6{
        font-weight:600;
        }

    button{
        cursor: pointer;
    }

    //Tudo que estiver desabilitado será aplicado:
    [disbled]{
        cursor: not-allowed;
        opacity: 0.6;
    }
    .react-modal-overlay{
        background: rgba(0,0,0,0.35);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position:relative;
        border-radius: 0.24rem ;
    }

     
        
    .react-modal-close
    {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.8);
        }
    }

`;