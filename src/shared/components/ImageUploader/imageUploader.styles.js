import styled from 'styled-components';

export const FileInput = styled.div`
  display: none;
`;

export const ImageContainer = styled.div`
    img {
      vertical-align: top;
      line-height: 1;
    };
    svg {
      width: 182px;
      height: 182px;
      stroke: none;
    }
    &:hover {cursor: pointer};
    display: inline-block;
    border: none;
    overflow: hidden;
    border-radius: 40px;
    max-width: 182px;
`;
