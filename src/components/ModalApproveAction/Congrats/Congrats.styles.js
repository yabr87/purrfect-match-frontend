import styled from 'styled-components';

export const ContainerView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 68px 16px 60px 16px;
  width: 100%;

  @media ${props => props.theme.media.tab} {
    padding: 60px 16px;
    width: 608px;
    height: 354px;
  }
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 33px;
  margin-bottom: 24px;
  color: ${props => props.theme.colors.textColor};
  @media ${props => props.theme.media.tab} {
    font-family: ${props => props.theme.fonts.main};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeiths.semi};
    font-size: 36px;
    line-height: 49px;
    letter-spacing: 0.04em;
    margin-bottom: 52px;
  }
`;

export const Text = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 22px;
  letter-spacing: 0.04em;
  text-align: center;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.textColor};
  @media screen and (min-width: 768px) {
    font-family: ${props => props.theme.fonts.main};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeiths.semi};
    font-size: ${props => props.theme.fontSizes.l};
    line-height: 33px;
    letter-spacing: 0.04em;
    margin-bottom: 60px;
  }
`;
