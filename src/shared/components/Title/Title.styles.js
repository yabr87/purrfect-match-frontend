import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-family: ${props => props.font || props.theme.fonts.main};
  text-align: ${props => props.align || 'center'};
  font-weight: ${props => props.weight || props.theme.fontWeiths.bold}; /*700*/
  font-size: ${props => props.size || props.theme.fontSizes.l}; /*24*/
  line-height: ${props => props.line || '1.375'};
  color: ${props => props.color || props.theme.colors.black};
  letter-spacing: ${props => props.letterSpacing || 0};

  @media ${props => props.theme.media.tab} {
    font-weight: ${props => props.tabWeight || props.theme.fontWeiths.bold};
    font-size: ${props => props.tabSize || props.theme.fontSizes.title};
    line-height: ${props => props.tabLine || '1.375'};
  }
  @media ${props => props.theme.media.desk} {
    font-weight: ${props => props.deskWeight || props.theme.fontWeiths.bold};
    font-size: ${props => props.deskSize || props.theme.fontSizes.title};
    line-height: ${props => props.deskLine || '1.375'};
  }
`;
