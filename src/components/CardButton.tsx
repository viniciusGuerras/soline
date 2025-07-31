import { useNavigate } from "react-router";
import { motion } from "framer-motion";

type CardButtonProps = {
    title: string;
    description: string;
    navigateUrl: string;
};

const CardButton = ({ title, description, navigateUrl }: CardButtonProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateUrl);
    };

    return (
        <motion.button
            className="w-full h-fit shadow-md border border-zinc-400 hover:border-zinc-500 focus:outline-none focus:ring-0 focus:shadow-none active:shadow-none p-3 bg-white flex flex-col items-start rounded-md"
            onClick={handleClick}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.3 }}
            type="button"
        >
            <h1 className="text-lg mb-3">{title}</h1>
            <p className="text-zinc-400">{description}</p>
        </motion.button>
    );
};

export default CardButton;
