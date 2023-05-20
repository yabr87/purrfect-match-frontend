import styled from 'styled-components';

export const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ lightTheme }) =>
    lightTheme
      ? 'linear-gradient(#FFC107, #1E215D)'
      : 'linear-gradient(#79D7ED,#FFC107)'};
  border-radius: 40px;
  height: 40px;
  border: 2px solid ${({ lightTheme }) => (lightTheme ? '#6B8096' : '#fff')};
  font-size: 0.5rem;
  padding: 5px;
  overflow: hidden;
  cursor: pointer;

  svg {
    width: 2rem;
    height: 100%;
    transition: all 0.3s linear;
    stroke: none;
    transition: all 0.3s linear;
  }
`;
