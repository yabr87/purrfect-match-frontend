import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    list-style: none;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: 20px;
      margin-left: auto;
    }


`;

export const AuthItem = styled.li`
  display: block;
    width: 165px;
    height: 40px;`

export const AuthLink = styled(NavLink)`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 7px 20px; 

    font-family: 'Manrope';
    font-weight: 600;
    font-size: 16px;
    line-height: 1.38;

    border: 2px solid #FFC107;
    border-radius: 40px;
    color: #FFC107;
    background-color: #FEF9F9;
    outline: none;

    transition-property: color, background;
    transition-duration: 250ms;
    transition-timing-function: ease;

    &:hover, :focus  {
        background-color: #FFC107;
        color: #FEF9F9;
        }

      &:nth-of-type(1) {
        background-color: #FFC107;
        color: #FEF9F9;
        font-weight: 700;

         &:hover, :focus  {
          color: #FFC107;
          background-color: #FEF9F9;}
      }
    

  @media screen and (min-width: 768px) {
    padding: 8px 20px; 
  }

  @media screen and (min-width: 1280px) {
    
  }
`;
