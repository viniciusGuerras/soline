import { motion } from "motion/react"

type contentCardProps = {
    title: string
}

function ContentCard({ title }: contentCardProps) {
    return (
        <motion.div
            className="w-full bg-white border border-gray-300 p-3 rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{scale:1.05}}
        >
            <h2>{title}</h2>

        </motion.div>
    );
}

export default ContentCard;