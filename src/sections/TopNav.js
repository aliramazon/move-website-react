import logo from "../assets/Logo.svg";

export const TopNav = () => {
    return (
        <nav className="nav">
            <div className="row nav__content">
                <img src={logo} alt="Move" className="nav__logo" />
                <ul className="nav__links">
                    <li>
                        <a href="#advantages" className="nav__link">
                            Why Us
                        </a>
                    </li>
                    <li>
                        <a href="#packages" className="nav__link">
                            Installation
                        </a>
                    </li>
                    <li>
                        <a href="#video" className="nav__link">
                            Demo
                        </a>
                    </li>
                    <li>
                        <a href="#features" className="nav__link">
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="#pricing" className="nav__link">
                            Pricing
                        </a>
                    </li>
                </ul>
                <button className="btn btn-sm btn-primary nav__cta-btn">
                    Get Started
                </button>
                <img
                    src="./assets/hamburger-icon.svg"
                    alt="Menu"
                    id="menu-icon"
                />
            </div>
        </nav>
    );
};
