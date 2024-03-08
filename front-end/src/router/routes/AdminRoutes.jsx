import { Routes, Route } from 'react-router-dom';

import { MyProducts, RegisterProduct } from '../../admin/pages';

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path='/my-products' element={<MyProducts />} />
            <Route path='/register-product' element={<RegisterProduct />} />
        </Routes>
    );
};