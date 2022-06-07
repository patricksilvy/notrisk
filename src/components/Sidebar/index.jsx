import { 
    AppSidebar,
    AppSidebarHeader,
    AppSidebarNotes,
    AppSidebarNote,
    SidebarNoteTitle
} from './styles';

const Sidebar = ({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote
}) => {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)

    return (
        <AppSidebar>
            <AppSidebarHeader>
                <h1>Notes</h1>
                <button onClick={onAddNote}>Add</button>
            </AppSidebarHeader>
            <AppSidebarNotes>
                {sortedNotes.map(({ id, title, body, lastModified }, i) => (
                    <AppSidebarNote 
                        className={`${id === activeNote && "active"}`}
                        onClick={() => setActiveNote(id)}
                        key={id}
                    >
                        <SidebarNoteTitle>
                            <strong>{title}</strong>
                            <button onClick={(e) => onDeleteNote(id)}>Delete</button>
                        </SidebarNoteTitle>

                        <p>{body && body.substr(0, 100) + "..."}</p>

                        <small className="note-meta">
                            Last Modified{" "}
                            {new Date(lastModified).toLocaleDateString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </small>
                    </AppSidebarNote>
                ))}
            </AppSidebarNotes>
        </AppSidebar>
    );
}

export default Sidebar;