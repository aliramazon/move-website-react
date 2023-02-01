import { Logo } from "../../assets";
import DribbbleLogo from "../../assets/Dribbble.svg";
import FaceBookLogo from "../../assets/Facebook.svg";
import TwitterLogo from "../../assets/Twitter.svg";
import YouTubeLogo from "../../assets/YouTube.svg";

export const Footer = () => {
    return (
        <footer>
            <div className="row footer__content">
                <div className="company__brand">
                    <Logo small />
                    <p>
                        Move - Multipurpose Design Template will help you
                        develop your website design.
                    </p>
                    <div className="company__socials">
                        <img src={DribbbleLogo} alt="Dribble" />
                        <img src={FaceBookLogo} alt="Facebook" />
                        <img src={TwitterLogo} alt="Twitter" />
                        <img src={YouTubeLogo} alt="YouTube" />
                    </div>
                </div>
                <div className="company__links">
                    <h6>Home</h6>
                    <ul>
                        <li>
                            <a href="/" className="nav__link">
                                Desktop App
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav__link">
                                Mobile App
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav__link">
                                SaaS
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav__link">
                                Event
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav__link">
                                Software
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="company__links">
                    <h6>Pages</h6>
                    <ul>
                        <li>
                            <a href="/" className="nav__link">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav__link">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav__link">
                                Case Studies
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav__link">
                                Pricing
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="company__links">
                    <h6>Blog</h6>
                    <ul>
                        <li>
                            <a href="/" className="nav__link">
                                Blog Listing
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav__link">
                                Blog Article
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav__link">
                                Newsroom
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="company__links">
                    <h6>Portfolio</h6>
                    <ul>
                        <li>
                            <a href="/" className="nav__link">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav__link">
                                Single Case
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row company__legal">
                <p>&#169; 2019-2020 Move Multipurpose Design Template.</p>
            </div>
        </footer>
    );
};
