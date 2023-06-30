import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/molecules/Footer';

const Layout = () => (
  <div className='flex flex-col'>
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
