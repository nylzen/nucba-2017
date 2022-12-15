import React, { useContext } from 'react';
import { MenuContext } from '../../context/Context';
import { HambugerContainer, Icon } from './BarsMenuStyles';

const BarsMenu = () => {
  const ctx = useContext(MenuContext);

  return (
    <HambugerContainer onClick={ctx.toggleMenu}>
      <Icon clicked={ctx.isMenuOpen}></Icon>
    </HambugerContainer>
  );
};

export default BarsMenu;
