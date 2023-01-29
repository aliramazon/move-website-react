import arrowRight from "../assets/icon-arrow-right.svg";
import console2X from "../assets/console@2x.png";

const packageMetrics = [
    {
        metric: "5.0/5.0",
        metricLabel: "Review Score",
        className: "package-score"
    },
    {
        metric: "300K+",
        metricLabel: "Monthly Installs",
        className: "package-installs"
    },
    {
        metric: "99.99%",
        metricLabel: "Satisfaction",
        className: "package-satisfaction"
    }
];

const PackageMetrics = () => {
    return (
        <div className="package-section__details">
            {packageMetrics.map((packageMetric) => {
                return (
                    <div className="package-section__detail">
                        <span className={packageMetric.className}>
                            {packageMetric.metric}
                        </span>
                        <span>{packageMetric.metricLabel}</span>
                    </div>
                );
            })}
        </div>
    );
};
export const Package = () => {
    return (
        <section className="package-section" id="packages">
            <div className="row package-section__content">
                <div className="package-section__image">
                    <img src={console2X} alt="Console" />
                </div>
                <div className="package-section__info">
                    <h2>Universal access to your data</h2>
                    <p className="sub-heading-2">
                        Get access to your data through any additional software
                        or try integrating it into our system, while we show you
                        resource usage statistics.
                    </p>
                    <PackageMetrics />

                    <a href="#" className="cta-link">
                        Explore more features
                        <img
                            src={arrowRight}
                            alt=""
                            className="cta-link__arrow"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};
