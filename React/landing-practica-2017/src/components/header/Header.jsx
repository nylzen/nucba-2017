import React, { useContext } from 'react';
import { MenuContext } from '../../context/Context';
import BarsMenu from '../barsMenu/BarsMenu';
import {
  LastNavbarItem,
  Logo,
  Navbar,
  NavbarItem,
  NavbarList,
  StyledHeader,
} from './HeaderStyles';

const Header = () => {
  const ctx = useContext(MenuContext);

  return (
    <>
      <StyledHeader>
        <Logo src='./images/logo.png' alt='Logo' />
        <Navbar isOpen={ctx.isMenuOpen}>
          <NavbarList>
            <NavbarItem>Inicio</NavbarItem>
            <NavbarItem>Nosotros</NavbarItem>
            <NavbarItem>Line-up</NavbarItem>
            <LastNavbarItem>Speakers</LastNavbarItem>
          </NavbarList>
        </Navbar>
        <BarsMenu />
      </StyledHeader>
    </>
  );
};

export default Header;
