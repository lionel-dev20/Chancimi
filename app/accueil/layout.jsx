import React from 'react';
import HomeHearder from './_components/HomeHearder';
import Footer from './_components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="">
      <HomeHearder />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
