import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 40px 0;
  list-style: none;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    margin-left: auto;
    padding: 0;
  }
`;

export const AuthItem = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 142px;
  height: 40px;
  border: 2px solid #FFC107;
  border-radius: 40px;
  color: #FFC107;
  background-color: #FEF9F9;
  font-weight: 600;
  transition: color 250ms ease, background 250ms ease;

  &:hover, &:focus  {
    background-color: #FFC107;
    color: #FEF9F9;
    outline: none;
  }

  &:first-of-type {
    min-width: 165px;
    font-weight: 700;
    background-color: #FFC107;
    color: #FEF9F9;

    &:hover, &:focus  {
      color: #FFC107;
      background-color: #FEF9F9;
    }
  }
`;

export const AuthLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 100%;
  gap: 8px;
  font-family: 'Manrope';
  font-size: 16px;
  line-height: 1.38;

  @media screen and (min-width: 768px) {
    padding: 8px 20px; 
  }
`;