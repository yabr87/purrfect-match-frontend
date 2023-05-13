import styled from 'styled-components';

const setWidth = ({ w }) => {
  if (!w) return 'none';
  if (w && w.endsWith('%')) {
    return `${w}`;
  } else {
    return `${w}px`;
  }
};

const setColor = ({ shape, theme }) => {
  switch (shape) {
    case 'solid':
      return `${theme.colors.background}`;
    case 'yellow':
      return `${theme.colors.yellow}`;
    default:
      return `${theme.colors.link}`;
  }
};

const setBackground = ({ shape, theme }) => {
  switch (shape) {
    case 'solid':
      return `linear-gradient(${theme.colors.link}, ${theme.colors.link})`;
    case 'yellow':
      return 'inherit';
    default:
      return 'inherit';
  }
};

const setHoverBackground = ({ shape, theme }) => {
  switch (shape) {
    case 'solid':
      return `${theme.colors.gradient}`;
    case 'yellow':
      return '#FFC107';
    default:
      return `${theme.colors.gradient}`;
  }
};

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.g || 12}px;

  width: ${setWidth};
  height: ${props => props.h || 40}px;
  padding: 10px;

  font-family: 'Manrope';
  font-weight: ${({ theme }) => theme.fontWeiths.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.38;
  color: ${setColor};

  background: ${setBackground};
  border-radius: ${({ theme }) => theme.radius.normal};
  border: 1px solid;

  outline: none;

  cursor: pointer;

  transition-property: color, background;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.background};
    background: ${setHoverBackground};
  }
`;
