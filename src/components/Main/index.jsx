import ReactMarkdown from "react-markdown";
import {
    Container,
    AppMainNoteEdit,
    AppMainNotePreview
} from './styles'

function Main({ 
    activeNote, onUpdateNote 
}) {
    const onEditField = (field, value) => {
        onUpdateNote({
          ...activeNote,
          [field]: value,
          lastModified: Date.now(),
        });
      };

    if (!activeNote) return <div className="no-active-note">No Active Note</div>;
    return (
        <Container>
            <AppMainNoteEdit>
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
            <AppMainNotePreview>
                <h1 className="preview-title">{activeNote.title}</h1>
                <ReactMarkdown className="markdown-preview">
                    {activeNote.body}   
                </ReactMarkdown>
            </AppMainNotePreview>
        </Container>
    );
}

export default Main