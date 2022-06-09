import {HiPlusSm} from 'react-icons/hi'
import { motion } from 'framer-motion';

import { 
    AppSidebar,
    AppSidebarHeader,
    AppSidebarNotes,
    AppSidebarNote,
    SidebarNoteTitle,
} from './styles';

const Sidebar = ({
    sidebar,
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote
}) => {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)

    return (
        <motion.div
            initial={ 
                sidebar ? {x: "-30%" , opacity: 0} : {x: 0, opacity: 1} 
            }
            animate={ 
                sidebar ? {x: 0, opacity: 1} : {x: "-30%" , opacity: 0} 
            }
            transition={{ ease: "easeInOut", duration: 0.5 }}
        >
            <AppSidebar>
                <AppSidebarHeader>
                    <h1>Notas</h1>
                    <motion.span 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{
                            scale: 0.95,
                            borderRadius: "100%",
                        }}
                        onClick={onAddNote}
                    >
                        <HiPlusSm/>
                    </motion.span>
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
                                <button onClick={(e) => onDeleteNote(id)}>Deletar</button>
                            </SidebarNoteTitle>

                            <p>{body && body.substr(0, 100) + "..."}</p>

                            <small className="note-meta">
                                Última Modificação{" "}
                                {new Date(lastModified).toLocaleDateString("pt-BR", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </small>
                        </AppSidebarNote>
                    ))}
                </AppSidebarNotes>
            </AppSidebar>
        </motion.div>
    );
}

export default Sidebar;