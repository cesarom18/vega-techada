import { Routes, Route } from 'react-router-dom';

import { MyProducts } from '../../admin/pages';

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path='/my-products' element={<MyProducts />} />
        </Routes>
    );
};