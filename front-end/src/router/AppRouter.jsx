import { Routes, Route } from 'react-router-dom';

import { AdminRoutes, AuthRoutes } from './routes';
import { Error } from '../error/pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/auth/*' element={<AuthRoutes />} />
      <Route path='/admin/*' element={<AdminRoutes />} />
      <Route path='/*' element={<Error />} />
    </Routes>
  );
};
