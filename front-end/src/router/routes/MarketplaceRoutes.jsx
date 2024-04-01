import { Routes, Route } from 'react-router-dom';

import { Landing, Stores, StoreDetail, ProductDetail, ShoppingCart } from '../../marketplace/pages';

export const MarketplaceRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/stores' element={<Stores />} />
            <Route path='/store-detail/:storeId' element={<StoreDetail />} />
            <Route path='/product-detail/:productId' element={<ProductDetail />} />
            <Route path='/shopping-cart' element={<ShoppingCart />} />
        </Routes>
    );
};
