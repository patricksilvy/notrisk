import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: ${props => props.sidebar ? '70vw' : '100vw'};
` ;

export const AppMainNoteEdit = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.sidebar ? '35vw' : '50vw'};
    padding: 25px;

    input {
        font-size: 32px;
        margin-bottom: 25px;
    }

    textarea {
        height: calc(100vh - 78px);
        overflow-y: scroll;
        padding-bottom: 100px;
    }   
`;

export const AppMainNotePreview = styled.div `
    width: ${props => props.sidebar ? '35vw' : '50vw'};
    padding: 25px;
    padding-top: 5px;
`;

export const NotNoteActive = styled.div `
    display: flex;
    flex-direction: column;
    width: ${props => props.sidebar ? '70vw' : '100vw'};
    justify-content: center;
    align-items: center;
    
    h1 {
        color: #444;
    }
`;