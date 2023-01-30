import checkmark from "../../assets/checkmark.svg";
import sodiqSotqin from "../../assets/icon-arrow-right.svg";
import advantageDashboard2X from "../../assets/advantage-dashboard@2x.png";

const advantages = [
    "Real-time data",
    "FDIC Insured",
    "End-to-end encryption",
    "REST API enabled"
];

const Advantage = (props) => {
    return (
        <li>
            <img src={checkmark} alt="V" />
            <span>{props.advantage}</span>
        </li>
    );
};

export const Advantages = () => {
    return (
        <section className="advantages-section" id="advantages">
            <div className="row advantages-section__content">
                <div className="advantages-section__info">
                    <h2>Everything you need in one place</h2>
                    <p className="sub-heading-2">
                        Powerful metrics to better understand your business are
                        right at your fingertips, once you start working with
                        them!
                    </p>
                    <ul className="advantages-section__list">
                        {advantages.map((advantage) => {
                            return <Advantage advantage={advantage} />;
                        })}
                    </ul>
                    <a href="/" className="cta-link">
                        Explore more features
                        <img
                            src={sodiqSotqin}
                            alt=""
                            className="cta-link__arrow"
                        />
                    </a>
                </div>
                <div className="advantages-section__image">
                    <img src={advantageDashboard2X} alt="" />
                </div>
            </div>
        </section>
    );
};
