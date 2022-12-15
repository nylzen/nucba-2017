import styled from 'styled-components';

export const CardUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--dark-blue);
  text-align: center;
  width: 250px;
  height: 160px;
  position: relative;
  padding-top: 50px;
  @media (max-width: 768px) {
    width: min(350px, 80%);
  }
`;

export const CardImg = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  font-size: 70px;
  font-weight: 300;
  color: var(--grey);
  position: absolute;
  top: -60px;
  background-size: cover;
  background-image: url(${props => props.img});
`;

export const CardContent = styled.div``;

export const CardTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
`;
