import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media ${props => props.theme.media.phone} {
    max-width: 480px;
  }

  @media ${props => props.theme.media.tab} {
    max-width: 768px;
    padding: 0 32px;
  }

  @media ${props => props.theme.media.desk} {
    max-width: 1280px;
    padding: 0 16px;
  }
`;
