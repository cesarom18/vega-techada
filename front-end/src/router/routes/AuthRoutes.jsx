import { Routes, Route } from 'react-router-dom';

import { Register } from '../../auth/pages';

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='/Register' element={<Register />} />
        </Routes>
    );
};
