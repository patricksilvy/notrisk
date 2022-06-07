import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body,
    .App {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        font-size: 16px;
        background: #fff;
    }

    button {
        background: none;
        border: 0;
        margin: 0;
        padding: 0;
        font-size: inherit;
        font-family: inherit;
        cursor: pointer;
        color: #000;
    }
    button:hover {
        color: #04c;
    }

    .App {
        display: flex;
    }
`;