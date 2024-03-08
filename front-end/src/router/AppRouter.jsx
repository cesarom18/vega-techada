import { Routes, Route } from 'react-router-dom';

import { AdminRoutes, AuthRoutes } from './routes';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/auth/*' element={<AuthRoutes />} />
            <Route path='/admin/*' element={<AdminRoutes />} />
        </Routes>
    );
};