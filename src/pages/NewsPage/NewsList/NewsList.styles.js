import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 44px;
  margin-top: 20px;
  column-gap: 32px;

  @media ${({ theme }) => theme.media.tab} {
    row-gap: 46px;
    margin-top: 26px;
  }
`;
