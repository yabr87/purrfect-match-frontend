import styled from 'styled-components';

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  margin-bottom: 24px;
  gap: 20px;

  @media ${props => props.theme.media.tab}  {
    gap: 24px;
    margin-bottom: 32px;
  }

  @media ${props => props.theme.media.desk}  {
    margin-bottom: 36px;
  }
`;
