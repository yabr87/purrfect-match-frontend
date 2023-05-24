import styled from 'styled-components';

export const ContainerModal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  // height: 95vh;
  height: fit-content;
  @media ${props => props.theme.media.tab} {
    height: fit-content;
  }
`;

export const ContainerView = styled.div`
  overflow-y: auto;
  padding: 44px 20px 16px;
  @media ${props => props.theme.media.tab} {
    align-items: normal;
    min-width: 681px;
    padding: 32px 32px 24px;
  }
`;

export const PetCardData = styled.div``;

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
  margin-bottom: 12px;

  @media ${props => props.theme.media.tab} {
    height: 80%;
  }
`;

export const PetDataItem = styled.tr`
  &:last-child {
    margin-bottom: 0;
  }
`;

export const NameCategory = styled.th`
  text-align: left;
  vertical-align: bottom;
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.semiBold};
  font-size: 14px;
  line-height: 19.12px;
  color: ${props => props.theme.colors.textColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80px;
  max-width: 81px;
  @media ${props => props.theme.media.tab} {
    min-width: 121px;
  }
`;

export const ValueCategory = styled.th`
  text-align: left;
  vertical-align: bottom;
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
    max-width: 618px;
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  width: 100%;
  height: 40px;

  font-family: inherit;
  font-weight: ${({ theme }) => theme.fontWeiths.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.link};

  background-color: transparent;
  border-radius: ${({ theme }) => theme.radius.normal};
  box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.colors.link};
  border: none;
  outline: none;

  transition: color 250ms ease;

  :not([disabled]):hover,
  :not([disabled]):focus-visible {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.buttonText};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: ${({ theme }) => theme.radius.normal};
    opacity: 0;
    transition: opacity 250ms ease;
  }

  :not([disabled]):hover::before,
  :not([disabled]):focus-visible::before {
    opacity: 1;
  }

  :active,
  :disabled {
    filter: opacity(0.6);
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
