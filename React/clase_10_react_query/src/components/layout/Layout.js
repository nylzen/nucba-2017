import React from 'react';
import Navbar from '../navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <h2 style={{ color: 'white', textAlign: 'center', marginTop: '30rem' }}>
        Nucba 2022
      </h2>
    </>
  );
};

export default Layout;
