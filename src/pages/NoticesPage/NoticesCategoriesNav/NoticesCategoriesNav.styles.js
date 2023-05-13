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
  background: #cce4fb;
  border-radius: 40px;
  white-space: nowrap;
  transition: color 250ms ease, background 0.2s ease;

  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: #54adff;

  &:hover,
  &:focus {
    color: #fef9f9;
    background: #54adff;
  }
`;
