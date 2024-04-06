import { Routes, Route } from 'react-router-dom';

import { MyUsers, RegisterUser, UserDetail, MyProducts, RegisterProduct, ProductDetail, MyOrders, OrderDetail, MyStores, RegisterStore, StroreDetail } from '../../admin/pages';

export const AdminRoutes = () => {
    return (
        <Routes>
            {/* Owner Routes */}
            <Route path='/my-users' element={<MyUsers />} />
            <Route path='/register-user' element={<RegisterUser />} />
            <Route path='/user-detail/:userId' element={<UserDetail />} />
            <Route path='/my-stores' element={<MyStores />} />
            <Route path='/register-store' element={<RegisterStore />} />
            <Route path='/store-detail/:storeId' element={<StroreDetail />} />
            {/* Store Routes */}
            <Route path='/my-products' element={<MyProducts />} />
            <Route path='/register-product' element={<RegisterProduct />} />
            <Route path='/product-detail/:productId' element={<ProductDetail />} />
            <Route path='/my-orders' element={<MyOrders />} />
            <Route path='/order-detail/:orderId' element={<OrderDetail />} />
        </Routes>
    );
};