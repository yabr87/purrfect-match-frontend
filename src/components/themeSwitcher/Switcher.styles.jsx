import styled from 'styled-components';

export const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.gradient};
  width: 128px;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${props => props.toggleBorder};
  font-size: 0.5rem;
  padding: 5px;
  overflow: hidden;
  cursor: pointer;

  svg {
    width: 2.5rem;
    height: auto;
    transition: all 0.3s linear;

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
