import { useCallback, useState } from 'react';

import { Navbar, NavbarResponsive } from '../components/navbar';
import { Banner } from '../components/banner'
import { Footer } from '../components/Footer';


export const MarketplaceLayout = ({ children, showBanner = false, bannerTitle, bannerImg, footerTheme = 'light' }) => {
    const [navbarVisible, setNavbarVisible] = useState(false);

    const toggleNavbarVisible = useCallback(() => {
        setNavbarVisible((prevState) => !prevState);
    }, []);

    return (
        <div className='bg-gray-50 min-h-screen'>
            <Navbar toggleNavbarVisible={toggleNavbarVisible} />
            <div className={`fixed z-[3] top-0 ${(navbarVisible) ? '-left-0' : '-left-full'} lg:hidden self-start overflow-y-scroll transition-all w-full`}>
                <NavbarResponsive toggleNavbarVisible={toggleNavbarVisible} />
            </div>
            {(showBanner) && <Banner bannerTitle={bannerTitle} bannerImg={bannerImg} />}
            <main>
                {children}
            </main>
            <Footer theme={footerTheme} />
        </div>
    );
};