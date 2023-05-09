import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppHeader = styled.header`
  display: flex;
`;

export const LogoLink = styled(Link)`
  color: grey;
  display: flex;
  gap: 8px;
  padding: 6px 12px;
`;
