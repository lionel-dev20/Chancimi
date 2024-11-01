import React from 'react';
import HomeHearder from '../accueil/_components/HomeHearder';
import Footer from '../accueil/_components/Footer';

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
