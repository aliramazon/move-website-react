import { useState } from "react";
import { Logo } from "../../assets";
import { HamburgerIcon } from "../../assets/icons";

import LogoMobile from "../../assets/Logo.svg";
import CloseIcon from "../../assets/x-icon.svg";

const links = [
    {
        text: "Why Us",
        link: "#advantages"
    },
    {
        text: "Installation",
        link: "#packages"
    },
    {
        text: "Demo",
        link: "#video"
    },
    {
        text: "Features",
        link: "#features"
    },
    {
        text: "Pricing",
        link: "#pricing"
    }
];

export const TopNav = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);
    return (
        <>
            <nav className="nav sticky">
                <div className="row nav__content">
                    <Logo />
                    <ul className="nav__links">
                        {links.map((link, idx) => {
                            return (
                                <li key={idx}>
                                    <a href={link.link} className="nav__link">
                                        {link.text}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <button className="btn btn-sm btn-primary nav__cta-btn">
                        Get Started
                    </button>
                    <HamburgerIcon
                        id="menu-icon"
                        onClick={() => setShowMobileNav(true)}
                    />
                </div>
            </nav>
            <nav
                className={`mobile-nav ${
                    showMobileNav ? "mobile-nav--show" : ""
                }`}
            >
                <div className="row">
                    <div className="mobile-nav__header">
                        <Logo />
                        <img
                            src={CloseIcon}
                            alt="Close"
                            id="close-icon"
                            onClick={() => setShowMobileNav(false)}
                        />
                    </div>

                    <ul className="mobile-nav__links">
                        {links.map((link, idx) => {
                            return (
                                <li key={idx}>
                                    <a
                                        href={link.link}
                                        className="mobile-nav__link"
                                        onClick={() => setShowMobileNav(false)}
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            );
                        })}

                        <button className="btn btn-lg btn-primary mobile-nav__cta">
                            Get Started
                        </button>
                    </ul>
                </div>
            </nav>
        </>
    );
};
