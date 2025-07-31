import { useNavigate } from 'react-router'
import { motion } from "motion/react"

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/main');
    };

    return (
        <div className="min-h-screen w-full text-gray-900 flex items-center justify-center ">
            <div className="max-w-2xl text-center">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                >
                    Opa, eu sou o Vinícius
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 }}
                >
                    O que me move é a curiosidade de entender o mundo, as pessoas e como tudo funciona.
                    Aprender é meu jeito de crescer, de me desafiar e de construir algo significativo.
                </motion.p>
                <motion.button
                    onClick={() => handleClick()}
                    className="bg-blue-400 border border-blue-500 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.2 }}
                    drag
                    dragConstraints={{ left: -1, right: 1, top: -1, bottom: 1 }}
                    whileTap={{ cursor: "grabbing" }}
                >
                    Veja mais
                </motion.button>
            </div>
        </div >
    )
}

export default Home
