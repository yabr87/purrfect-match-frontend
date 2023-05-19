import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 40px 0;

  @media ${props => props.theme.media.tab} {
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

  font-weight: ${props => props.theme.fontWeiths.semibold};

  border: 2px solid #FFC107;
  border-radius: ${props => props.theme.radius.normal};

  color: ${props => props.theme.colors.yellow};
  background-color:  ${props => props.theme.colors.backgroundColor};
  transition: color 250ms ease, background 250ms ease;

  &:hover, &:focus  {
    background-color: ${props => props.theme.colors.yellow};
    color:  ${props => props.theme.colors.backgroundColor};
    outline: none;
  }

  &:first-of-type {
    min-width: 165px;
    font-weight: ${props => props.theme.fontWeiths.bold};
    background-color: ${props => props.theme.colors.yellow};
    color:  ${props => props.theme.colors.backgroundColor};

    &:hover, &:focus  {
      color: ${props => props.theme.colors.yellow};
      background-color:  ${props => props.theme.colors.backgroundColor};
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

  font-size: 16px;
  line-height: 1.38;

  @media ${props => props.theme.media.tab} {
    padding: 8px 20px; 
  }
`;