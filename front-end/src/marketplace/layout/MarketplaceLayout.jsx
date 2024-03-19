import { Navbar } from '../components/navbar/Navbar';

export const MarketplaceLayout = ({ children }) => {
    return (
        <div className='bg-gray-50 min-h-screen'>
            <Navbar />
            <div>
                {children}
            </div>
        </div>
    );
};