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
    width: 100%;
  }
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 28px;
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
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    letter-spacing: -0.01em;
  }
`;

export const ButtonWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: end;
  }
`;

export const PetImage = styled.img`
  object-fit: cover;
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;

  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    width: 262px;
    height: 298px;
    margin-bottom: 0;
    margin-right: 24px;
  }
`;

export const ImageCategory = styled.p`
  position: absolute;
  width: 126px;
  height: 32px;
  left: 0;
  top: 16px;
  display: flex;
  padding: 11px 17px;
  align-items: center;
  text-align: center;
  background: #cce4fb;
  border-radius: 0px 16px 16px 0px;
`;

export const PetDataListWrap = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 321px;
  }
`;

export const PetDataList = styled.table`
  width: 100%;
`;

export const PetDataItem = styled.tr`
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const NameCategory = styled.th`
  text-align: start;
  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19.12px;
  width: 80px;
`;

export const ValueCategory = styled.th`
  text-align: start;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16.39px;
`;

export const PetComents = styled.p`
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    margin-bottom: 70px;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 129px;
  height: 40px
  padding: 10px;

  font-family: 'Manrope';
  font-weight: 700;
  font-size: 16px;
  line-height: 1.38;
  color: #54ADFF;

border: 2px solid #54ADFF;
border-radius: 40px;

cursor: pointer;

  &:hover,
  &:focus {
    color: #FFFFFF;
    background:  #54ADFF;
  }
`;

export const ContactLinkItem = styled.a`
  text-align: start;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16.39px;
  color: black;
  text-decoration-line: 'none';
  &:hover,
  &:focus {
    color: #ffc107;
    text-decoration-line: underline;
  }
`;
