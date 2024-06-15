import { Routes, Route } from 'react-router-dom';

import { Landing, Stores, StoreDetail, AboutUs } from '../../pages';

export const MarketplaceRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/stores' element={<Stores />} />
            <Route path='/store-detail/:storeId' element={<StoreDetail />} />
            <Route path='/about-us' element={<AboutUs />} />
        </Routes>
    );
};
