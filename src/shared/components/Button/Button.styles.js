import styled from 'styled-components';

export const Btn = styled.button`
  height: 21px;
  font-family: inherit;
  background-color: white;
  text-transform: uppercase;

  border-radius: 5px;
  border: 1px solid darkgray;
  outline: none;
  line-height: 1;
  padding: 3px 8px;
  transition: all 0.2s ease;
  box-shadow: 0 2px darkgray;
  max-width: 120px;
  min-width: 65px;

  &:hover {
    box-shadow: 0 1px darkgray;
    transform: translateY(2px);
  }
`;
