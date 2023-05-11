import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none; //прибрити після стилів контейнеру
  gap: 20px;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    gap: 60px;
    padding-top: 92px;
  }

  @media (min-width: 1280px) {
  flex-direction: row;
  margin-left: 159px;
  gap: 40px;
  padding-top: 0;
  }
`;

export const NavItem = styled(NavLink)`
  display: block;
  font-size: 16px;
  padding: 8px 0; 
  
  color: #111;  
  
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 32px;
  line-height: 1.37;
letter-spacing: 0.04em;

  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: ease;

  outline: none;

  &:hover, :focus {
    color: #FFC107;  
    font-weight: 700;
  }

  &:active {
    color: #FFC107; 
      }

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 1.37;
    letter-spacing: 0.04em;

    &:hover, :focus {
    font-weight: 500;
  }

  @media (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.35;
  }
  }  
`;