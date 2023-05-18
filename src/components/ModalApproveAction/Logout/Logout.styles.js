import styled from 'styled-components';

export const ContainerView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px 16px;
  min-width: 280px;
  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 108px 16px;
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 49px;
    letter-spacing: 0.04em;

    margin-bottom: 48px;
  }
`;

export const ButtonWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
