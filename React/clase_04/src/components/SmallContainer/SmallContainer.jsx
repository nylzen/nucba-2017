import React from 'react';
import styled from 'styled-components';

const SmallWrapper = styled.div`
  height: 50%;
  width: 75%;
  padding: 2rem;
  border: 1px dashed #4747ff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SmallContainer = ({ children }) => {
  return <SmallWrapper>{children}</SmallWrapper>;
};

export default SmallContainer;
