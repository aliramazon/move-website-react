import { BlueCheckmarkIcon } from "../../assets/icons";

const prices = [
    {
        name: "Free",
        description: "Free start for your project on our platform.",
        cost: 0,
        usage: "Per User / Per Year",
        features: [
            "Access to editing all blocks",
            "Editing blocks together",
            "Access to all premium icons",
            "A dedicated domain",
            "Ability to integrate with CMS"
        ],
        button: {
            text: "Try for free",
            type: "btn-secondary"
        }
    },
    {
        name: "Standard",
        description: "For a small company that wants to show what it's worth.",
        cost: 400,
        usage: "Per User / Per Year",
        features: [
            "Access to editing all blocks 1",
            "Editing blocks together 2",
            "Access to all premium icons 3",
            "A dedicated domain 4",
            "Ability to integrate with CMS 5"
        ],
        button: {
            text: "Start 14 days free trial",
            type: "btn-primary"
        }
    },
    {
        name: "Ultimate",
        description:
            "For a large company that wants to achieve maximum returns",
        cost: 600,
        usage: "Per User / Per Year",
        features: [
            "Access to editing all blocks 10",
            "Editing blocks together 20",
            "Access to all premium icons 30",
            "A dedicated domain 40",
            "Ability to integrate with CMS 50"
        ],
        buttonText: "Start 14 days free trial",
        button: {
            text: "Start 14 days free trial",
            type: "btn-secondary"
        }
    }
];

const PricingCards = () => {
    return (
        <div className="pricing-section__plans">
            {prices.map((price) => {
                return (
                    <div className="pricing-card">
                        <h5 className="pricing-card__heading">{price.name}</h5>
                        <p className="pricing-card__text pricing-card__subheading">
                            {price.description}
                        </p>
                        <div className="pricing-card__price">
                            <h4>${price.cost}</h4>
                            <p className="pricing-card__text">{price.usage}</p>
                        </div>
                        <ul className="pricing-card__list">
                            {price.features.map((feature, idx) => {
                                return (
                                    <li
                                        className="pricing-card__text"
                                        key={idx}
                                    >
                                        <BlueCheckmarkIcon />
                                        {feature}
                                    </li>
                                );
                            })}
                        </ul>
                        <button
                            className={`btn btn-lg btn-full-width ${price.button.type} pricing-card__btn`}
                        >
                            {price.button.text}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export const Pricing = () => {
    return (
        <section className="pricing-section" id="pricing">
            <div className="row">
                <h2 className="centered-h2">
                    Expand your options with a subscription
                </h2>
                <p className="sub-heading-2 centered-subheading-2">
                    Choose the plan that suits you best! More features will be
                    available thanks to individual plans.
                </p>
                <div className="pricing-section__plan-switcher">
                    <span>Bill Monthly</span>
                    <input type="checkbox" id="slider-checkbox" checked />
                    <label className="slider__track" for="slider-checkbox">
                        <span className="slider__thumb"></span>
                    </label>
                    <span>Bill Anually</span>
                </div>
                <PricingCards />
            </div>
        </section>
    );
};
