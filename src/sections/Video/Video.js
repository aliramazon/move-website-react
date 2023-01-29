export const Video = () => {
    return (
        <section className="video-section" id="video">
            <div className="row">
                <h2 className="centered-h2">Build it from ground up</h2>
                <p className="sub-heading-2 centered-subheading-2">
                    Create your projects from scratch with the powerful Move
                    Toolkit. We will tell you more about it in our video.
                </p>
                <div className="video-section__video-wrapper">
                    <iframe
                        title="Video"
                        allowFullScreen=""
                        allow="autoplay"
                        src="https://www.youtube.com/embed/DGQwd1_dpuc?rel=0&amp;showinfo=0&amp;autoplay=0"
                        className="video-section__video"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};
