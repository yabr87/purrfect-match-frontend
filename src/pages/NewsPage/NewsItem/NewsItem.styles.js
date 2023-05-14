import styled from 'styled-components';

export const Item = styled.li`
  max-width: 480px;

  @media screen and (min-width: 768px) {
    max-width: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1280px) {
    max-width: calc((100% - 64px) / 3);
  }
`;
