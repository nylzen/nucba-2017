import React, { useState } from 'react';
import styled from 'styled-components';

export const ClickButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #4747ff;
  color: white;
  border-radius: 10px;
  margin-top: 1rem;
`;

const EjemploOnClick = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      {isToggle ? <span>Es true</span> : <span>Es False</span>}
      <ClickButton onClick={handleToggle}>Toggle</ClickButton>
    </>
  );
};

export default EjemploOnClick;
