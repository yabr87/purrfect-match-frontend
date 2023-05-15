import styled from 'styled-components';

export const ContainerView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px 16px;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 608px;
  }
`;

export const Title = styled.h2`
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 48px;
`;

export const TextWrap = styled.div`
  display: flex;
  text-align: center;
  max-width: 393px;
`;

export const TextAccent = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 40px;
`;

export const ButtonWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
