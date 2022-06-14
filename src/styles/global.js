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
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};

    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
        
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.background};
        border: 1px solid ${props => props.theme.colors.secundary};
        border-right: 0;
        border-top: 0;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.secundary};
        border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #BFBFBF;
    }


    button {
        background: none;
        border: 0;
        margin: 0;
        padding: 0;
        font-size: inherit;
        font-family: inherit;
        cursor: pointer;
        color: #aa4465;
    }
    button:hover {
        color: #7B0828;
    }

    .App {
        display: block;
    }
`;