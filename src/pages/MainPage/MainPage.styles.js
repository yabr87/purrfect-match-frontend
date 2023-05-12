import styled from 'styled-components';
import mobPet1 from '../../images/mainPage/pets@1x-mob.png';
import mobPet2 from '../../images/mainPage/pets@2x-mob.png';
import tabPet1 from '../../images/mainPage/pets@1x-tab.png';
import tabPet2 from '../../images/mainPage/pets@2x-tab.png';
import deskPet1 from '../../images/mainPage/pets@1x-desk.png';
import deskPet2 from '../../images/mainPage/pets@2x-desk.png';

export const Title = styled.h1`
  margin-top: 60px;
  margin-left: 20px;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.38;
  color: #000000;
`;
export const Pictures = styled.div`
  margin-top: 20px;
  background-repeat: no-repeat;
  position: absolute;
  background-image: url(${mobPet1});
  background-size: 320px 394px;
  width: 320px;
  height: 394px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobPet2});
  }

  @media screen and (min-width: 768px) {
    background-size: cover;
    background-image: url(${tabPet1});

    @media screen and (min-width: 768px) and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabPet2});
    }
  }

  @media screen and (min-width: 1280px) {
    background-size: cover;
    background-image: url(${deskPet1});

    @media screen and (min-width: 1280px) and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${deskPet2});
    }
  }
`;
