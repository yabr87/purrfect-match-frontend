import styled from 'styled-components';

export const ContainerView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 44px 20px 16px 20px;
  min-width: 280px;
  @media screen and (min-width: 768px) {
    width: 681px;
    padding: 32px 32px 32px 24px;
  }
`;

export const PetCardData = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Title = styled.h2`
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 22px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: end;
  }
`;

export const PetImage = styled.img`
  width: 240px;
  height: 240px;
  align-items: center;
  border-radius: 0px 0px 40px 40px;
  background-color: aqua;
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 24px;
  }
`;

export const PetDataListWrap = styled.div`
  @media screen and (min-width: 768px) {
    // display: flex;
    // flex-direction: column;
  }
`;

export const PetDataList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 12px;
`;

export const PetDataItem = styled.li`
  display: block;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const PetComents = styled.p`
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    margin-bottom: 70px;
  }
`;
