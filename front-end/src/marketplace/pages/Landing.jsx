import { MarketplaceLayout } from '../layout/MarketplaceLayout';
import { LandingBanner } from '../components/banner';
import { LandingServices } from '../components/LandingServices';
import { LandingContactForm } from '../components/form';

export const Landing = () => {
    return (
        <MarketplaceLayout>
            <LandingBanner />
            <LandingServices />
            <LandingContactForm />
        </MarketplaceLayout>
    );
};