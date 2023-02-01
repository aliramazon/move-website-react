import goldline from "../../assets/goldline.svg";
import aven from "../../assets/aven.svg";
import kanba from "../../assets/kanba.svg";
import kyan from "../../assets/kyan.svg";
import spotify from "../../assets/spotify.svg";

export const TrustedBy = () => {
    return (
        <section className="trustedby-section">
            <div className="row trustedby-section__content">
                <div className="trustedby-section__heading">
                    We are trusted by the best in the world
                </div>
                <div className="trustedby-section__logos">
                    <img src={goldline} alt="Goldline" />
                    <img src={aven} alt="Aven" />
                    <img src={kanba} alt="Kanba" />
                    <img src={kyan} alt="Kyan" />
                    <img src={spotify} alt="spotify" />
                </div>
            </div>
        </section>
    );
};
