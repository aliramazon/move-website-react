import { Logo } from "../../assets";
import { HamburgerIcon } from "../../assets/icons";

const links = ["Why Us", "Installation", "Demo", "Features", "Pricing"];

export const TopNav = () => {
    return (
        <nav className="nav">
            <div className="row nav__content">
                <Logo />
                <ul className="nav__links">
                    {links.map((link, idx) => {
                        return (
                            <li key={idx}>
                                <a href="#advantages" className="nav__link">
                                    {link}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <button className="btn btn-sm btn-primary nav__cta-btn">
                    Get Started
                </button>
                <HamburgerIcon id="menu-icon" />
            </div>
        </nav>
    );
};
