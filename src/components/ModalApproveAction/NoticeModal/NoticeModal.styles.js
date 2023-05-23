import styled from 'styled-components';

export const ContainerView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 44px 20px 16px 20px;

  @media ${props => props.theme.media.tab} {
    padding: 32px;
    align-items: normal;
  }
`;

export const PetCardData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  @media ${props => props.theme.media.tab} {
    flex-direction: row;
    margin-bottom: 28px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;

  @media ${props => props.theme.media.mobile} {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media ${props => props.theme.media.tab} {
    max-width: 286px;
    display: block;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
`;

export const PetImage = styled.img`
  object-fit: cover;
  width: 240px;
  height: 240px;
  border-radius: ${props =>
    ` 0px 0px ${props.theme.radius.normal} ${props.theme.radius.normal} `};

  margin-bottom: 12px;

  @media ${props => props.theme.media.tab} {
    width: 262px;
    height: 298px;
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.bold};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 33px;
  margin-bottom: 22px;
  color: ${props => props.theme.colors.textColor};
  @media ${props => props.theme.media.tab} {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 38px;
    letter-spacing: -0.01em;
  }
`;

export const ImageCategory = styled.p`
  position: absolute;
  width: fit-content;
  height: 32px;
  left: 0;
  top: 16px;
  display: flex;
  padding: 11px 17px;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.lightBlue};
  border-radius: ${props =>
    ` 0px ${props.theme.radius.small} ${props.theme.radius.small}  0px `};
`;

export const PetDataListWrap = styled.div`
  width: 100%;
`;

export const PetDataList = styled.table`
  width: 100%;
  margin-bottom: 12px;

  @media ${props => props.theme.media.tab} {
    width: 100%;
    height: 80%;
  }
`;

export const PetDataListBody = styled.tbody`
  // width: 100%;
  // height: 80%;
`;

export const PetDataItem = styled.tr`
  max-width: 80px;
  max-height: 27px;
  text-overflow: ellipsis;
  height: 27px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const NameCategory = styled.th`
  text-align: start;
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.semiBold};
  font-size: 14px;
  line-height: 19.12px;
  color: ${props => props.theme.colors.textColor};
  max-width: 80px;
  max-height: 27px;
  text-overflow: ellipsis;
  @media ${props => props.theme.media.tab} {
    max-width: 121px;
  }
`;

export const ValueCategory = styled.th`
  text-align: start;
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 16.39px;
  color: ${props => props.theme.colors.textColor};
`;

export const PetComents = styled.p`
  color: ${props => props.theme.colors.textColor};
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: 14px;
  line-height: 19.12px;
  margin-bottom: 12px;
  max-width: 256px;
  @media ${props => props.theme.media.tab} {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 70px;
    max-width: 100%;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme.media.tab} {
    display: flex;
    flex-direction: row;
    justify-content: end;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 10px;

  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeiths.bold};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.38;
  color: ${props => props.theme.colors.link};

  border: 2px solid ${props => props.theme.colors.link};
  border-radius: ${props => props.theme.radius.normal};
  width: 100%;

  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.colors.buttonText};
    background: ${props => props.theme.colors.link};
  }

  @media ${props => props.theme.media.mobile} {
    max-width: 256px;
  }

  @media ${props => props.theme.media.tab} {
    margin-left: 12px;
    max-width: 129px;
  }
`;

export const ContactLinkItem = styled.a`
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 16.39px;
  color: ${props => props.theme.colors.textColor};
  text-decoration-line: 'none';
  text-align: start;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.link};
    text-decoration-line: underline;
  }
`;
