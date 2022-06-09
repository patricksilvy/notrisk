import styled from 'styled-components';

export const AppSidebar = styled.div `
    width: 30vw;
    height: calc(100vh - 50px);
    border: 1px solid #ddd;
`;

export const AppSidebarHeader = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 25px;

    h1 {
        margin: 0;
    }

    span {
        height: 40px;
        border-radius: 100%;
        transition: background 0.5s;

        svg {
            font-size: 2.5em;
        }
    }

    span:hover {
        background-color: #ddd;
    }
`;

export const AppSidebarNote = styled.div `
    padding: 25px;
    cursor: pointer; 
    margin-left: 0;
    
    p {
        margin: 10px 0;
    }
    
    small {
        display: block;
        color: #999;
    }
    `;

export const AppSidebarNotes = styled.div `
    height: calc(100vh - 78px);
    overflow-y: scroll;
    overflow-x: hidden;
    padding-bottom: 100px;

    ${AppSidebarNote}:hover {
        background: #ddd;
    }

    ${AppSidebarNote}.active,
    ${AppSidebarNote}.active small {
        background: #63A46C;
        color: white;
    }  
`;

export const SidebarNoteTitle = styled.div `
    display: flex;
    justify-content: space-between;

    button {
        color: #AA4465;
    }

    button:hover {
        color: #7B0828;
    }
`;