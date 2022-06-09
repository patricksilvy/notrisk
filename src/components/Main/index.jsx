import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {
    Container,
    AppMainNoteEdit,
    AppMainNotePreview,
    NotNoteActive
} from './styles'

function Main({ 
    sidebar,
    activeNote, 
    onUpdateNote
}) {
    const onEditField = (field, value) => {
        onUpdateNote({
          ...activeNote,
          [field]: value,
          lastModified: Date.now(),
        });
      };

    return activeNote ? (
        <Container sidebar={sidebar}>
            <AppMainNoteEdit sidebar={sidebar}>
                <input
                    type="text"
                    id="title"
                    placeholder="Título da Nota"
                    value={activeNote.title}
                    onChange={(e) => onEditField("title", e.target.value)}
                    autoFocus
                />
                <textarea
                    id="body"
                    placeholder="Escreva sua nota aqui..."
                    value={activeNote.body}
                    onChange={(e) => onEditField("body", e.target.value)}
                />
            </AppMainNoteEdit>
            <AppMainNotePreview sidebar={sidebar}>
                <h1 className="preview-title">{activeNote.title}</h1>
                <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown-preview">
                    {activeNote.body}   
                </ReactMarkdown>
            </AppMainNotePreview>
        </Container>
    ) : (
        <NotNoteActive sidebar={sidebar}>
            <h1>Nenhuma nota selecionada...</h1>
        </NotNoteActive>
    );
}

export default Main