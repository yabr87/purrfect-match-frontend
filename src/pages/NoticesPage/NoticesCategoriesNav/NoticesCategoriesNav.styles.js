import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media screen and (max-width: 480px) {
    li:last-child {
      flex-basis: 100%;
    }
  }
`;

export const ListItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  box-sizing: border-box;
  margin: 0;
  padding: 9px 16px;
  height: 35px;
  background: ${props => props.theme.colors.lightBlue};
  border-radius: ${props => props.theme.radius.normal};
  white-space: nowrap;
  transition: color 250ms ease, background 0.2s ease;

  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.link};

  &.active {
    color: ${props => props.theme.colors.backgroundColor};
    background: ${props => props.theme.colors.link};
  }
`;
