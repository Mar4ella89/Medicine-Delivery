import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from 'modules/Loader/Loader';
import Navbar from 'modules/Navbar/Navbar';

const Shop = lazy(() => import('pages/Shop/Shop'));
const ShoppingCart = lazy(() => import('pages/ShoppingCart/ShoppingCart'));

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="*" element={<Shop />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Layout;
