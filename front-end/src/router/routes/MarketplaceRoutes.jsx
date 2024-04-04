import { Routes, Route } from 'react-router-dom';

import { Landing, Stores, StoreDetail, ProductDetail, ShoppingCart, Checkout, MyInformation } from '../../marketplace/pages';

export const MarketplaceRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/stores' element={<Stores />} />
            <Route path='/store-detail/:storeId' element={<StoreDetail />} />
            <Route path='/product-detail/:productId' element={<ProductDetail />} />
            <Route path='/shopping-cart' element={<ShoppingCart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/my-information' element={<MyInformation />} />
        </Routes>
    );
};
