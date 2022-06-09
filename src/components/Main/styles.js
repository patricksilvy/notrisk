import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 70vw;
` ;

export const AppMainNoteEdit = styled.div`
    display: flex;
    flex-direction: column;
    width: 35vw;
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
    width: 35vw;
`;