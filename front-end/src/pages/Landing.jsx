import { MarketplaceLayout } from '../layout/MarketplaceLayout';
import { LandingBanner } from '../components/banner';
import { LandingServices } from '../components/LandingServices';

export const Landing = () => {
    return (
        <MarketplaceLayout>
            <LandingBanner />
            <LandingServices />
        </MarketplaceLayout>
    );
};