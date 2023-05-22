import styled from 'styled-components';

export const ContainerView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 16px;
  text-align: center;

  @media ${props => props.theme.media.tab} {
    width: 100%;
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
  color: ${props => props.theme.colors.textColor};
  @media ${props => props.theme.media.tab} {
    font-weight: ${props => props.theme.fontWeiths.bold};
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 38px;
    letter-spacing: -0.01em;
    margin-bottom: 52px;
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
`;

export const TextAccent = styled.span`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.bold};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${props => props.theme.colors.textColor};
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media ${props => props.theme.media.tab} {
    display: flex;
    flex-direction: row;
  }
`;
