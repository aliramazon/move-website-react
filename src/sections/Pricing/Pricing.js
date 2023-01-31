import { BlueCheckmarkIcon } from "../../assets/icons";

<BlueCheckmarkIcon />;

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
                <div className="pricing-section__plans">
                    <div className="pricing-card">
                        <h5 className="pricing-card__heading">Free</h5>
                        <p className="pricing-card__text pricing-card__subheading">
                            Free start for your project on our platform.
                        </p>
                        <div className="pricing-card__price">
                            <h4>$0</h4>
                            <p className="pricing-card__text">
                                Per User / Per Year
                            </p>
                        </div>
                        <ul className="pricing-card__list">
                            <li className="pricing-card__text">
                                <BlueCheckmarkIcon /> Access to editing all
                                blocks
                            </li>
                            <li className="pricing-card__text">
                                <BlueCheckmarkIcon />
                                Editing blocks together
                            </li>
                            <li className="pricing-card__text">
                                <BlueCheckmarkIcon />
                                Access to all premium icons
                            </li>
                            <li className="pricing-card__text">
                                <BlueCheckmarkIcon />A dedicated domain
                            </li>
                            <li className="pricing-card__text">
                                <BlueCheckmarkIcon />
                                Ability to integrate with CMS
                            </li>
                        </ul>
                        <button className="btn btn-lg btn-full-width btn-secondary pricing-card__btn">
                            Try for free
                        </button>
                    </div>
                    <div className="pricing-card">
                        <h5 className="pricing-card__heading">Standard</h5>
                        <p className="pricing-card__text pricing-card__subheading">
                            For a small company that wants to show what it's
                            worth.
                        </p>
                        <div className="pricing-card__price">
                            <h4>$300</h4>
                            <p className="pricing-card__text">
                                Per User / Per Year
                            </p>
                        </div>
                        <ul className="pricing-card__list">
                            <li className="pricing-card__text">
                                <BlueCheckmarkIcon />
                                Access to editing all blocks
                            </li>
                            <li className="pricing-card__text">
                                <BlueCheckmarkIcon />
                                Editing blocks together
                            </li>
                            <li className="pricing-card__text">
                                <BlueCheckmarkIcon />
                                Access to all premium icons
                            </li>
                            <li className="pricing-card__text">
                                <BlueCheckmarkIcon />A dedicated domain
                            </li>
                            <li className="pricing-card__text">
                                <BlueCheckmarkIcon />
                                Ability to integrate with CMS
                            </li>
                        </ul>
                        <button className="btn btn-lg btn-full-width btn-primary">
                            Start 14 Days Free Trial
                        </button>
                    </div>
                    <div className="pricing-card">
                        <h5 className="pricing-card__heading">Ultimate</h5>
                        <p className="pricing-card__text pricing-card__subheading">
                            For a large company that wants to achieve maximum
                            returns
                        </p>
                        <div className="pricing-card__price">
                            <h4>$600</h4>
                            <p className="pricing-card__text">
                                Per User / Per Year
                            </p>
                        </div>
                        <ul className="pricing-card__list">
                            <li className="pricing-card__text">
                                <BlueCheckmarkIcon />
                                Access to editing all blocks
                            </li>
                            <li className="pricing-card__text">
                                <BlueCheckmarkIcon />
                                Editing blocks together
                            </li>
                            <li className="pricing-card__text">
                                <BlueCheckmarkIcon />
                                Access to all premium icons
                            </li>
                            <li className="pricing-card__text">
                                <BlueCheckmarkIcon />A dedicated domain
                            </li>
                            <li className="pricing-card__text">
                                <BlueCheckmarkIcon />
                                Ability to integrate with CMS
                            </li>
                        </ul>
                        <button className="btn btn-lg btn-full-width btn-secondary">
                            Start 14 Days Free Trial
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
