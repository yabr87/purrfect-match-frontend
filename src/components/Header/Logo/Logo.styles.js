import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid #FFC107`;

export const LogoImage = styled.p`
width: 116px;
height: 20px;

    @media screen and (min-width: 768px) {
    width: 162px;
    height: 28px; 
}

`