import { useNavigate } from "react-router"

type cardButtonProps = {
    title: string,
    description: string,
    navigateUrl: string
}

const CardButton = ({ title, description, navigateUrl }: cardButtonProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateUrl);
    }

    return (
        <button className="w-full h-fit shadow-md p-3 bg-white flex flex-col items-start" onClick={() => handleClick()}>
            <h1>{title}</h1>
            <p className="text-zinc-500">{description}</p>
        </button>
    );
}

export default CardButton;