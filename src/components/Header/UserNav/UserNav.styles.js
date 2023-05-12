import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const UserLink = styled(NavLink)`
display: flex;
align-items: center;
gap: 12px;
padding: 8px 16px; 
margin-left: auto;


font-size: 16px;
line-height: 1.38;
color: #FFC107;
`;

export const UserName = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.35;
`;

export const UserContainer = styled.div`
padding-top: 40px;
padding-bottom: 84px;

 @media screen and (min-width: 768px) {
  padding: 0;
margin-left: auto;
  }
`