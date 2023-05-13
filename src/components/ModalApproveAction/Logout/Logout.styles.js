import styled from 'styled-components';

export const ContainerView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px 16px;
  min-width: 280px;
  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 109px 16px;
  }
`;

export const Title = styled.h2`
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 52px;
    font-size: 36px;
  }
`;

export const ButtonWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
