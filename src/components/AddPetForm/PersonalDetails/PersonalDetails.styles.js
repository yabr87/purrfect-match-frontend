import styled from 'styled-components';

export const DetailsWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 36px;
margin-bottom: 24px;
gap: 20px;

@media screen and (min-width: 768px) {
    gap:24px;
    margin-bottom: 32px;
  }
  
  @media screen and (min-width: 1280px) {
    margin-bottom: 36px;
  }
`

