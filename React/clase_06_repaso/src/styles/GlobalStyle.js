import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        user-select: none;
        background-color: #191919;
        font-family: 'Poppins', sans-serif;
        color: white;
        
    }

    img {
        max-width: 100%;
        height: auto;
    }
`;

export default GlobalStyle;
