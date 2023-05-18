import styled from 'styled-components';

export const ContainerView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 68px 16px 60px 16px;
  @media screen and (min-width: 768px) {
    padding: 60px 16px;
    width: 608px;
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 52px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 49px;
    letter-spacing: 0.04em;
  }
`;

export const Text = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  margin-bottom: 40px;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.04em;
  }
`;
