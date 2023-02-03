export const HamburgerIcon = ({ id, onClick }) => {
    return (
        <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="menu-icon"
            onClick={onClick}
        >
            <path
                d="M6 20.25H36.75"
                stroke="#B0B7C3"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6 10H36.75"
                stroke="#B0B7C3"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6 30.5H36.75"
                stroke="#B0B7C3"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
