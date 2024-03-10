import { Routes, Route } from 'react-router-dom';

import { MyProducts, RegisterProduct, ProductDetail, MyOrders } from '../../admin/pages';

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path='/my-products' element={<MyProducts />} />
            <Route path='/register-product' element={<RegisterProduct />} />
            <Route path='/product-detail/:productId' element={<ProductDetail />} />
            <Route path='/my-orders' element={<MyOrders />} />
        </Routes>
    );
};