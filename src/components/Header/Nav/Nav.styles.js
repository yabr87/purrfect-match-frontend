import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  list-style: none;

  @media screen and (min-width: 768px) {
    gap: 60px;
    padding: 92px;
  }

  @media (min-width: 1280px) {
  flex-direction: row;
  margin-left: 159px;
  gap: 40px;
  padding: 0;
  }
`;

export const NavItem = styled(NavLink)`
  display: block;

  font-size: 16px;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.37;
  letter-spacing: 0.04em;

  color: #111;  
  outline: none;
  transition: color 250ms ease;


  &:hover, :focus {
    color: #FFC107;  
    font-weight: 700;
  }

  &:active {
    color: #FFC107; 
      }

  @media (min-width: 768px) {
    font-size: 48px;

    &:hover, :focus {
    font-weight: 500;
  }

  @media (min-width: 1280px) { 
    padding: 8px 0; 
    font-size: 20px;
    line-height: 1.35;
  }
  }  
`;