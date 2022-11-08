import styled from 'styled-components';

export const CounterContainer = styled.div`
  width: 400px;
  padding: 2rem;
  border: 1px solid #4747ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  & span {
    font-size: 4rem;
  }
`;

export const CounterButton = styled.button`
  background: #4747ff;
  border-radius: 50%;
  color: white;
  font-size: 2rem;
  width: 50px;
  height: 50px;
`;
