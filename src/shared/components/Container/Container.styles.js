import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  background-color: #cccccc;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
  }
`;
