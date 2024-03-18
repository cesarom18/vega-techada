import { Routes, Route } from 'react-router-dom';

import { MyUsers, MyProducts, RegisterProduct, ProductDetail, MyOrders, OrderDetail } from '../../admin/pages';

export const AdminRoutes = () => {
    return (
        <Routes>
            {/* Owner Routes */}
            <Route path='/my-users' element={<MyUsers />} />
            {/* Store Routes */}
            <Route path='/my-products' element={<MyProducts />} />
            <Route path='/register-product' element={<RegisterProduct />} />
            <Route path='/product-detail/:productId' element={<ProductDetail />} />
            <Route path='/my-orders' element={<MyOrders />} />
            <Route path='/order-detail/:orderId' element={<OrderDetail />} />
        </Routes>
    );
};