import { useNavigate } from 'react-router'
import { motion } from "motion/react"

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/main');
    };

    return (
        <div className="min-h-screen w-full text-gray-900 bg-gray-100  flex items-center justify-center ">
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
                    className="bg-white text-black border border-zinc-500 hover:bg-zinc-500 font-semibold py-2 px-6 rounded-lg shadow-md "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.2 }}
                >
                    Veja mais
                </motion.button>
            </div>
        </div >
    )
}

export default Home
