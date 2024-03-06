import { Routes, Route } from 'react-router-dom';

import { Login, Register } from '../../auth/pages';

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    );
};
