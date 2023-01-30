import planning from "../../assets/planning.svg";
import execution from "../../assets/execution.svg";
import results from "../../assets/results.svg";
import evolution from "../../assets/evolution.svg";
import cloud from "../../assets/cloud.svg";
import analitics from "../../assets/analitics.svg";

const features = [
    {
        icon: planning,
        name: "Flexible Planning",
        description:
            "The rich features of our platform make it easy for your team member to plan with your product."
    },
    {
        icon: execution,
        name: "Transparent Execution",
        description:
            "Our software brings transparency to your work processes and the entire ecosystem."
    },
    {
        icon: results,
        name: "Actionable Results",
        description:
            "Extensive reporting functionality gives your team critical insight into their agile process."
    },
    {
        icon: evolution,
        name: "Scalable Evolution",
        description:
            "Move software helps people in your team work with project resolution without losing quality."
    },
    {
        icon: cloud,
        name: "Cloud Storage",
        description:
            "You can store your projects without leaving our product. Move Cloud will help you do this."
    },
    {
        icon: analitics,
        name: "Analitics API",
        description:
            " When working with metrica our API manager can help you connect it safely and get the latest statistics."
    }
];

const FeatureCard = (props) => {
    return (
        <div className="feature-card">
            <img
                src={props.icon}
                alt="Analitics"
                className="feature-card__icon"
            />
            <h6 className="feature-card__heading">{props.heading}</h6>
            <p className="feature-card__description">{props.text}</p>
        </div>
    );
};
const FeaturesCards = () => {
    return (
        <div className="features-section__cards">
            {features.map((feature) => {
                return (
                    <>
                        {/* <div className="feature-card">
                            <img
                                src={feature.icon}
                                alt="Analitics"
                                className="feature-card__icon"
                            />
                            <h6 className="feature-card__heading">
                                {feature.name}
                            </h6>
                            <p className="feature-card__description">
                                {feature.description}
                            </p>
                        </div> */}
                        <FeatureCard
                            icon={feature.icon}
                            heading={feature.name}
                            text={feature.description}
                        />
                    </>
                );
            })}
        </div>
    );
};

export const Features = () => {
    return (
        <section className="features-section" id="features">
            <div className="row">
                <h2 className="centered-h2">Go Move with ease</h2>
                <p className="sub-heading-2 centered-subheading-2">
                    Learn all the features and features to make your process
                    even faster and more exciting. Our product is ready to give
                    you a pleasant interaction experience.
                </p>
                <FeaturesCards />
            </div>
        </section>
    );
};
