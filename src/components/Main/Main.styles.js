import styled from 'styled-components';
import mobPet1 from '../../images/mainPage/pets@1x-mob.png';
import mobPet2 from '../../images/mainPage/pets@2x-mob.png';
import tabPet1 from '../../images/mainPage/pets@1x-tab.png';
import tabPet2 from '../../images/mainPage/pets@2x-tab.png';
import deskPet1 from '../../images/mainPage/pets@1x-desk.png';
import deskPet2 from '../../images/mainPage/pets@2x-desk.png';

export const Title = styled.h1`
  margin-top: 20px;
  width: 280px;
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeiths.bold};
  font-size: 32px;
  line-height: 1.38;
  color: ${props => props.theme.colors.titleColor};

  @media ${props => props.theme.media.tab} {
    margin-top: 40px;
    width: 588px;
    font-size: 68px;
    line-height: 1.47;
  }
  @media ${props => props.theme.media.desk} {
    margin-top: 110px;
    width: 501px;
    font-weight: 800;
    line-height: 1.3;
  }
`;

export const SectionWrapper = styled.div`
  position: relative;
  display: grid;
`;

export const Pictures = styled.img`
  margin-top: -10px;
  height: 475px;
  max-width: 475px;
  width: 100%;
  margin: 0 auto;
  object-fit: cover;
  object-position: center top;
  content: url(${mobPet1});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url(${mobPet2});
  }

  @media ${props => props.theme.media.tab} {
    height: 986px;
    max-width: 986px;
    content: url(${tabPet1});

    @media ${props => props.theme.media.tab} and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url(${tabPet2});
    }
  }

  @media ${props => props.theme.media.desk} {
    position: absolute;
    right: 0;
    top: 0;
    content: url(${deskPet1});

    @media ${props => props.theme.media.desk} and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url(${deskPet2});
    }
  }
`;
