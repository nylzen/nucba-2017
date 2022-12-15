import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { TodoContext } from '../../context/context';

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 50px;
`;

const LinkStyled = styled(NavLink)`
  color: ${props => (props.pepito ? '#e11d48' : 'white')};
`;

const Navbar = () => {
  const ctx = useContext(TodoContext);
  return (
    <>
      <NavbarContainer>
        <h1>Logo</h1>
        <LinksContainer>
          <LinkStyled to='/'>Home</LinkStyled>
          <LinkStyled to='/todo' pepito={ctx.taskList.length}>
            Todo
          </LinkStyled>
          <LinkStyled to='/fetch'>Fetch</LinkStyled>
        </LinksContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
