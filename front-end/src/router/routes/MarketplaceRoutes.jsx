import { Routes, Route } from 'react-router-dom';

import { Landing } from '../../marketplace/pages';

export const MarketplaceRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
        </Routes>
    );
};
