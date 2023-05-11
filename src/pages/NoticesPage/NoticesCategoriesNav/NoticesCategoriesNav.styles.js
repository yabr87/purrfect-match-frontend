import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  gap: 8px;
`;

export const ListItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  box-sizing: border-box;
  margin: 0;
  padding: 8px 16px;
  height: 35px;
  background: #cce4fb;
  border-radius: 40px;

  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: #54adff;
  &.active {
    color: #fef9f9;
    background: #54adff;
  }
`;
