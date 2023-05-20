import styled from 'styled-components';

export const ContainerView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px 16px;
  text-align: center;
  @media ${props => props.theme.media.tab} {
    width: 608px;
  }
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 33px;
  margin-bottom: 52px;
  color: ${props => props.theme.colors.textColor};
  @media ${props => props.theme.media.tab} {
    margin-bottom: 40px;
    font-family: ${props => props.theme.fonts.main};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeiths.bold};
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 38px;
    letter-spacing: -0.01em;
  }
`;

export const Text = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.semi};
  ${props => props.theme.fontSizes.s};
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.textColor};

  margin-bottom: 40px;

  @media ${props => props.theme.media.tab} {
    font-family: ${props => props.theme.fonts.main};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeiths.semi};
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.01em;

    margin-bottom: 48px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  text-align: center;
  max-width: 393px;
`;

export const TextAccent = styled.span`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.bold};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${props => props.theme.colors.yellow};
`;

export const ButtonWrap = styled.div`
  @media ${props => props.theme.media.tab} {
    display: flex;
  }
`;
