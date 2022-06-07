import styled from 'styled-components';

export const AppSidebar = styled.div `
    width: 30%;
    height: 100vh;
    border-right: 1px solid #ddd;
`;

export const AppSidebarHeader = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 25px;

    h1 {
        margin: 0;
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

    ${AppSidebarNote}:hover {
        background: #ddd;
    }

    ${AppSidebarNote}.active,
    ${AppSidebarNote}.active small {
        background: #08c;
        color: white;
    }  
`;

export const SidebarNoteTitle = styled.div `
    display: flex;
    justify-content: space-between;

    button {
        color: crimson;
    }
`;