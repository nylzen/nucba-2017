import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px dashed #4747ff;
  height: fit-content;
  width: 70%;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 0.5rem;

  & h3 {
    background-color: var(--color-primary);
    padding: 2rem;
  }

  & h3:hover {
    background: crimson;
  }

  :hover {
    border: 1px solid crimson;
  }
`;

export const StyledH4 = styled.h4`
  font-size: 1.5rem;
  color: #4747ff;
`;

export const StyledP = styled.p`
  font-size: 1.25rem;
  color: crimson;
`;

export const StyledButton = styled.button`
  background-color: ${({ color }) => (color ? '#4747ff' : 'crimson')};
  color: ${({ color }) => (color ? 'white' : '#4747ff')};
  width: ${({ pepito }) => (pepito ? '145px' : '')};
  padding: 1rem 0.5rem;
  border-radius: 10px;
  cursor: pointer;
`;
