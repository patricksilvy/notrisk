import { Container } from './styles'
import Switch from 'react-switch';
import { FiChevronsLeft, FiMenu } from 'react-icons/fi'
import { motion } from 'framer-motion'

function Header({
    sidebar,
    setSidebar
}) {
    return(
        <Container>
            { sidebar ? 
                <motion.span
                    whileHover={{ scale: 1.2 }}
                    whileTap={{
                        scale: 0.8,
                        borderRadius: "100%",
                    }}
                >
                    <FiChevronsLeft
                        onClick={() => setSidebar(!sidebar)}
                    /> 
                </motion.span> : <motion.span
                    whileHover={{ scale: 1.2 }}
                    whileTap={{
                        scale: 0.8,
                        borderRadius: "100%"
                    }}
                >
                    <FiMenu
                        onClick={() => setSidebar(!sidebar)}
                    /> 
                </motion.span>
            }
            <h1>Notestrik</h1>
            <Switch
                onChange={() => {}}
                checked={false}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={30}
                handleDiameter={18}
                offColor="#ddd"
                onColor="#63A46C"
            />
        </Container>
    );
}

export default Header;