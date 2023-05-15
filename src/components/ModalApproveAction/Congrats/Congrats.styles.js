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
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 52px;
    font-size: 36px;
  }
`;

export const Text = styled.p`
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    font-size: 24px;
  }
`;
