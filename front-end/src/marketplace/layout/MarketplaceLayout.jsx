import { Navbar } from '../components/navbar/Navbar';
import { Footer } from '../components/Footer';

export const MarketplaceLayout = ({ children }) => {
    return (
        <div className='bg-gray-50 min-h-screen'>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};