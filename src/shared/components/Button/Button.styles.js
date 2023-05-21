import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.g || 12}px;

  width: ${setWidth};
  height: ${props => props.h || 40}px;
  padding: 10px;

  font-family: inherit;
  font-weight: ${({ theme }) => theme.fontWeiths.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${setColor};

  background: ${setBackground};
  border-radius: ${({ theme }) => theme.radius.normal};
  box-shadow: ${setShadow};
  border: none;
  outline: none;

  transition-property: color, background, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: ease;

  :not([disabled]):hover,
  :not([disabled]):focus-visible {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.buttonText};
    background: ${setHoverBackground};
    box-shadow: ${setHoverShadow};
  }

  :active,
  :disabled {
    filter: opacity(0.6);
  }
`;

function setWidth({ w }) {
  if (!w) return 'none';
  if (w && w.endsWith('%')) {
    return `${w}`;
  } else {
    return `${w}px`;
  }
}

function setColor({ shape, theme }) {
  switch (shape) {
    case 'solid':
      return `${theme.colors.buttonText}`;
    default:
      return `${theme.colors.link}`;
  }
}

function setBackground({ shape, theme }) {
  switch (shape) {
    case 'solid':
      return `linear-gradient(${theme.colors.link}, ${theme.colors.link})`;
    default:
      return `inherit`;
  }
}

function setHoverBackground({ shape, theme }) {
  switch (shape) {
    case 'solid':
      return `${theme.colors.gradient}`;
    default:
      return `${theme.colors.gradient}`;
  }
}

function setShadow({ shape, theme }) {
  switch (shape) {
    case 'solid':
      return `non`;
    default:
      return `inset 0px 0px 0px 2px ${theme.colors.link}`;
  }
}

function setHoverShadow({ shape, theme }) {
  switch (shape) {
    case 'solid':
      return `non`;
    default:
      return `inset 0px 0px 0px 0px ${theme.colors.link}`;
  }
}
