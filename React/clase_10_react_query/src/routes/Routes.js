import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import Bands from '../pages/bands/Bands';
import Band from '../pages/band/Band';

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path='/' element={<Home />} />
          <Route path='bands' element={<Bands />} />
          <Route path='band/:id' element={<Band />} />
          <Route path='*' element='TUki' />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
