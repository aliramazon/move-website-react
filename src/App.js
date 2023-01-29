import { Hero } from "./sections/Hero";
import { TopNav } from "./sections/TopNav";
import { TrustedBy } from "./sections/TrustedBy";
import { Advantages } from "./sections/Advantages";
import { Package } from "./sections/Package";
import { Video } from "./sections/Video/Video";

const App = () => {
    return (
        <>
            <TopNav />
            <Hero />
            <TrustedBy />
            <Advantages />
            <Package />
            <Video />
        </>
    );
};

export default App;
