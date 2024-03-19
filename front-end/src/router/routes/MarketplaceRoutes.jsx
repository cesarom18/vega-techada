import { Routes, Route } from 'react-router-dom';

import { Home } from '../../marketplace/pages';

export const MarketplaceRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    );
};
