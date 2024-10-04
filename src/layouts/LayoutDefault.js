import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Banner from '../components/layout/partials/Banner';

    // <Header navPosition="right" className="reveal-from-bottom" />
const LayoutDefault = ({ children }) => (
  <>
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutDefault;  