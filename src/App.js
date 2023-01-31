import { TrustedBy } from "./sections/TrustedBy";

import {
    Advantages,
    Hero,
    Video,
    Features,
    Pricing,
    Package,
    TopNav
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
