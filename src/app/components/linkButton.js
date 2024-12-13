
const LinkButton = ({ href, icon, text }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-white py-2 mr-4"
        >
            <span className="mr-1">+</span>
            {icon} {text}
        </a>
    );
};

export default LinkButton;