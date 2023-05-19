import styled from 'styled-components';

export const LanguageSelectorContainer = styled.div``;

export const Select = styled.select`
  display: block;
  border: none;
  background: transparent;

  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: 0.04em;

  color: ${props => props.theme.colors.black};
  outline: none;
  transition: color 250ms ease;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.yellow};
    font-weight: 700;
  }

  @media ${props => props.theme.media.tab} {
    font-size: ${props => props.theme.fontSizes.s};

    &:hover,
    &:focus {
      font-weight: ${props => props.theme.fontWeiths.semi};
    }

    @media ${props => props.theme.media.desk} {
      padding: 8px 0;
      font-size: ${props => props.theme.fontSizes.m};
      line-height: 1.35;
    }
  }
`;
