import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const UserLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;

  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.38;
  color: ${props => props.theme.colors.yellow};

  @media ${props => props.theme.media.tab} {
    padding: 8px 16px;
  }
`;

export const UserName = styled.p`
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.35;
`;

export const UserContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 84px;
  margin-left: auto;

  @media ${props => props.theme.media.tab} {
    padding: 0;
  }
`;
