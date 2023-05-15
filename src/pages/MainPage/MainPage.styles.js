import styled from 'styled-components';
import mobPet1 from '../../images/mainPage/pets@1x-mob.png';
import mobPet2 from '../../images/mainPage/pets@2x-mob.png';
import tabPet1 from '../../images/mainPage/pets@1x-tab.png';
import tabPet2 from '../../images/mainPage/pets@2x-tab.png';
import deskPet1 from '../../images/mainPage/pets@1x-desk.png';
import deskPet2 from '../../images/mainPage/pets@2x-desk.png';

export const Title = styled.h1`
  position: absolute;
  width: 280px;
  height: 88px;
  left: 20px;
  top: 108px;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 32px;
  line-height: 1.38;
  color: #000000;

  @media screen and (min-width: 768px) {
    width: 588px;
    height: 200px;
    left: 32px;
    top: 148px;
    font-size: 68px;
    line-height: 1.47;
  }
  @media screen and (min-width: 1280px) {
    width: 501px;
    height: 264px;
    left: 16px;
    top: 256px;
    font-weight: 800;
    line-height: 1.3;
  }
`;
export const Pictures = styled.img`
  position: absolute;
  top: 216px;
  width: 320px;
  height: 390px;
  content: url(${mobPet1});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url(${mobPet2});
  }

  @media screen and (min-width: 768px) {
    top: 375px;
    width: 768px;
    height: 815px;
    content: url(${tabPet1});

    @media screen and (min-width: 768px) and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url(${tabPet2});
    }
  }

  @media screen and (min-width: 1280px) {
    top: 98px;
    left: 365px;
    width: 917px;
    height: 670px;
    content: url(${deskPet1});

    @media screen and (min-width: 1280px) and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url(${deskPet2});
    }
  }
`;
