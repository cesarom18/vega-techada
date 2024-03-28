import { Routes, Route } from 'react-router-dom';

import { Landing, Stores, StoreDetail } from '../../marketplace/pages';

export const MarketplaceRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/stores' element={<Stores />} />
            <Route path='/store-detail/:storeId' element={<StoreDetail />} />
        </Routes>
    );
};
