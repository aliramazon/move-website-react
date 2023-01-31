import { TopNav } from "./sections/TopNav";
import { TrustedBy } from "./sections/TrustedBy";

import {
    Advantages,
    Hero,
    Video,
    Features,
    Pricing,
    Package
} from "./sections";
const App = () => {
    return (
        <>
            <TopNav />
            <Hero />
            <TrustedBy />
            <Advantages />
            <Package />
            <Video />
            <Features />
            <Pricing />
        </>
    );
};

export default App;
