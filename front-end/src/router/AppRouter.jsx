import { Routes, Route } from 'react-router-dom';

import { MarketplaceRoutes } from './routes';
import { Error } from '../error/pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/marketplace/*' element={<MarketplaceRoutes />} />
      <Route path='/*' element={<Error />} />
    </Routes>
  );
};
