import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 288px;
  height: 456px;
  background: ${props => props.theme.colors.backgroundModal};
  box-shadow: ${props =>
    props.promo ? props.theme.shadows.promo : props.theme.shadows.default};
  border-radius: ${props => props.theme.radius.normal};
  transition: transform 250ms ease;

  @media ${props => props.theme.media.tab} {
    &:hover,
    &:focus {
      transform: perspective(800px) rotateX(5deg) rotateY(0deg) rotateZ(0deg);
    }
  }

  @media ${props => props.theme.media.tab} and (max-width: ${props =>
      props.theme.mediaPoints.desktop}) {
    width: 336px;
    max-width: 100%;
  }
`;

export const CardImageContainer = styled.div`
  position: relative;
`;

export const CardImage = styled.img`
  object-fit: cover;
  width: 288px;
  height: 288px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 336px;
    max-width: 100%;
  }
`;

export const ImageDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: ${props => props.theme.colors.textColor};
  padding: 10px;
`;

export const ImageDetailsItem = styled.p`
  height: 28px;
  min-width: 80px;
  white-space: nowrap;
  left: 12px;
  top: 248px;

  svg {
    margin-right: 8px;
  }

  background: ${props => props.theme.colors.lightBlue};
  border-radius: ${props => props.theme.radius.small};
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeiths.semiBold};
  font-size: ${props => props.theme.fontSizes.xs};

  padding: 5px;
  display: flex;
  align-items: center;

  color: ${props => props.theme.colors.textColor};
`;

export const ImageDetailsText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80px;
  text-transform: capitalize;
`;

export const ImageDetailsTextLong = styled(ImageDetailsText)`
  transition: all 250ms ease;
  text-transform: capitalize;

  &:hover,
  &:focus {
    position: absolute;
    z-index: 1;

    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    min-width: 100px;
    overflow: visible;
    max-width: 100%;
    background: ${props => props.theme.colors.lightBlue};
    border-radius: ${props => props.theme.radius.small};
    font-family: ${props => props.theme.fonts.main};
    font-weight: ${props => props.theme.fontWeiths.semiBold};
    font-size: ${props => props.theme.fontSizes.xs};
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
  justify-content: space-between;
  text-align: center;
  background: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.textColor};
  border-radius: ${props =>
    ` 0px ${props.theme.radius.small} ${props.theme.radius.small}  0px `};

  svg {
    fill: ${props => props.theme.colors.promo};
    border: 1px solid ${props => props.theme.colors.promo};
    border-radius: ${props => props.theme.radius.round};
    padding: 2px;
  }
`;

export const PhotoDescription = styled.p`
  height: 66px;
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.bold};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 33px;
  color: ${props => props.theme.colors.textColor};
`;
export const BelowItemContainer = styled.div`
  padding: 20px;
`;

export const AddToFavoriteBtn = styled.button`
  z-index: 999;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  right: 12px;
  top: 12px;
  background: ${props => props.theme.colors.lightBlue};
  border-radius: ${props => props.theme.radius.round};
  border: none;
  outline: none;
  transition: fill 250ms ease;

  &:hover svg,
  &:focus svg {
    fill: ${props => props.theme.colors.link};
  }
`;
