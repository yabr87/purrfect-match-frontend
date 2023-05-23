import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  list-style: none;

  @media ${props => props.theme.media.tab} {
    gap: 60px;
    padding: 92px;
  }

  @media ${props => props.theme.media.desk} {
    flex-direction: row;
    gap: 40px;
    padding: 0;
  }
`;

export const NavItem = styled(NavLink)`
  display: block;
  width: fit-content;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: 32px;
  line-height: 1.37;
  letter-spacing: 0.04em;

  color: ${props => props.theme.colors.textColor};
  outline: none;
  transition: color 250ms ease;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.yellow};
    font-weight: 700;
  }

  &.active {
    color: ${props => props.theme.colors.yellow};
  }

  @media ${props => props.theme.media.tab} {
    font-size: ${props => props.theme.fontSizes.title};

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
