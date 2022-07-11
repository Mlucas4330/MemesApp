import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.jpg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    body {
        height: 100vh;
        width: 100vw;
        background-image: url(${background});
        background-size: cover;
        overflow-x: hidden;
        position: relative;
    }

    @media (max-width: 600px) {
        body {
            background-repeat: repeat;
        }
    }
`;
