import styled from 'styled-components';

export const ContainerView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px 16px;
  min-width: 280px;
  @media ${props => props.theme.media.tab} {
    width: 608px;
    padding: 108px 16px;
  }
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 33px;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.yellow};
  @media ${props => props.theme.media.tab} {
    font-family: ${props => props.theme.fonts.main};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeiths.semi};
    font-size: 36px;
    line-height: 49px;
    letter-spacing: 0.04em;

    margin-bottom: 48px;
  }
`;

export const ButtonWrap = styled.div`
  @media ${props => props.theme.media.tab} {
    display: flex;
  }
`;
