import hero2X from "../../assets/hero@2x.png";

export const Hero = () => {
    return (
        <header id="header">
            <div className="row header__content">
                <div>
                    <h1 id="header__heading" className="heading-1">
                        Move is the perfect development tool
                    </h1>
                    <p className="sub-heading-1 header__sub-heading">
                        We have created software for each employee of your team
                        to help them do their work more efficiently and better
                        to plan, track and release great software!
                    </p>
                    <div className="header__buttons">
                        <button className="btn btn-lg btn-secondary">
                            <img src="./assets/github.svg" alt="" />
                            View on GitHub
                        </button>
                        <button className="btn btn-lg btn-primary">
                            Go Premium
                        </button>
                    </div>
                </div>
            </div>
            <img className="header__hero" src={hero2X} alt="advantages" />
            <div id="after-header-bg"></div>
        </header>
    );
};
