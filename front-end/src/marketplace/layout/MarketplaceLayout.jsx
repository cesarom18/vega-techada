import { Navbar } from '../components/navbar/Navbar';
import { Banner } from '../components/banner'
import { Footer } from '../components/Footer';

export const MarketplaceLayout = ({ children, showBanner = false, bannerTitle, bannerImg }) => {
    return (
        <div className='bg-gray-50 min-h-screen'>
            <Navbar />
            {(showBanner) && <Banner bannerTitle={bannerTitle} bannerImg={bannerImg}/>}
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};