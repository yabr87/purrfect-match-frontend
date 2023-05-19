import styled from 'styled-components';

export const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ lightTheme }) =>
    lightTheme
      ? 'linear-gradient(#79D7ED,#FFC107)'
      : 'linear-gradient(#FFC107, #1E215D)'};
  border-radius: 40px;
  height: 40px;
  border: 2px solid ${({ lightTheme }) => (lightTheme ? '#fff' : '#6B8096')};
  font-size: 0.5rem;
  padding: 2px;
  overflow: hidden;
  cursor: pointer;

  svg {
    width: 2rem;
    height: 100%;
    transition: all 0.3s linear;
    stroke: none;

    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;
