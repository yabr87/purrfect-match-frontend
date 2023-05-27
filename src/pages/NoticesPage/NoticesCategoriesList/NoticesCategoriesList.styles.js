import styled from 'styled-components';

export const CollectionContainer = styled.div`
  flex-wrap: wrap;
  gap: 32px 24px;
  display: flex;
  margin-top: 24px;
  justify-content: space-around;

  /* @media ${props => props.theme.media.desk} {
    margin-top: 42px;
  } */
`;
