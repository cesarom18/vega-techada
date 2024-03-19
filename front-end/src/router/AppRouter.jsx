import { Routes, Route } from 'react-router-dom';

import { AdminRoutes, AuthRoutes, MarketplaceRoutes } from './routes';
import { Error } from '../error/pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/auth/*' element={<AuthRoutes />} />
      <Route path='/admin/*' element={<AdminRoutes />} />
      <Route path='/marketplace/*' element={<MarketplaceRoutes />} />
      <Route path='/*' element={<Error />} />
    </Routes>
  );
};
