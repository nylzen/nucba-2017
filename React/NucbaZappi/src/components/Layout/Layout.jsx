import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toggleMenuHidden } from '../../redux/user/userSlice';
import { LayoutWrapper } from './LayoutStyles';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const hiddenMenu = useSelector(state => state.user.hiddenMenu);

  useEffect(() => {
    if (!hiddenMenu) {
      dispatch(toggleMenuHidden());
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
