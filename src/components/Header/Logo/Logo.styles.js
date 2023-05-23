import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    --color1: ${({ theme }) => theme.logo.text};
    --color2: ${({ theme }) => theme.logo.paw};
  }
`;
