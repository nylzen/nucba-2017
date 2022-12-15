import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Fetch from '../pages/Fetch/Fetch';
import Home from '../pages/Home/Home';
import Todo from '../pages/Todo/Todo';

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path='/' element={<Home />} />
          <Route path='todo' element={<Todo />} />
          <Route path='fetch' element={<Fetch />} />
          <Route path='*' element='Upsssss' />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
