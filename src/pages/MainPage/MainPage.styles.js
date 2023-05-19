import styled from 'styled-components';
import mobPet1 from '../../images/mainPage/pets@1x-mob.png';
import mobPet2 from '../../images/mainPage/pets@2x-mob.png';
import tabPet1 from '../../images/mainPage/pets@1x-tab.png';
import tabPet2 from '../../images/mainPage/pets@2x-tab.png';
import deskPet1 from '../../images/mainPage/pets@1x-desk.png';
import deskPet2 from '../../images/mainPage/pets@2x-desk.png';

export const Title = styled.h1`
  margin-top: 60px;
  width: 280px;
  height: 88px;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeiths.bold};
  font-size: 32px;
  line-height: 1.38;
  color: ${props => props.theme.colors.titleColor};

  @media screen and (min-width: 768px) {
    margin-top: 80px;
    width: 588px;
    height: 200px;
    font-size: 68px;
    line-height: 1.47;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 188px;
    width: 501px;
    height: 264px;
    font-weight: 800;
    line-height: 1.3;
  }
`;

export const PicturesContainer = styled.div`
  position: relative;
  margin: 0 -98px;
  @media screen and (min-width: 768px) {
    margin: 0 -142px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0 -16px;
  }
`;

export const Pictures = styled.img`
  position: absolute;
  top: -30px;
  width: calc(100%);
  content: url(${mobPet1});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url(${mobPet2});
  }

  @media screen and (min-width: 768px) {
    top: -37px;
    content: url(${tabPet1});

    @media screen and (min-width: 768px) and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url(${tabPet2});
    }
  }

  @media screen and (min-width: 1280px) {
    top: -540px;
    left: 324px;
    width: 986px;
    content: url(${deskPet1});

    @media screen and (min-width: 1280px) and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url(${deskPet2});
    }
  }
`;
