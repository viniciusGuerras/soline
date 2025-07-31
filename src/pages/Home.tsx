import { useNavigate } from 'react-router'
import { motion } from "motion/react"


function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/main');
    };

    return (
        <div className="min-h-screen w-full bg-gray-100 text-gray-900 flex items-center justify-center ">
            <div className="max-w-2xl text-center">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}

                >
                    Hello, I'm Vinícius
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 }}
                >
                    I'm someone deeply curious about how humans think, make decisions, form ideas, and solve problems. I build software as a way to explore cognition, creativity, and intelligence.
                </motion.p>
                <motion.button
                    onClick={() => handleClick()}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.2 }}
                >
                    See more
                </motion.button>
            </div>
        </div >
    )
}

export default Home
