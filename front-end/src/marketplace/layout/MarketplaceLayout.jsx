import { Navbar } from '../components/navbar/Navbar';
import { Banner } from '../components/banner'
import { Footer } from '../components/Footer';

export const MarketplaceLayout = ({ children, showBanner = false, bannerTitle }) => {
    return (
        <div className='bg-gray-50 min-h-screen'>
            <Navbar />
            {(showBanner) && <Banner bannerTitle={bannerTitle}/>}
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};