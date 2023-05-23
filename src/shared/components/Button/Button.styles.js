import styled from 'styled-components';

export const Btn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    z-index: 1;
    display: flex;
    align-items: center;
    gap: ${props => props.g || 12}px;
  }

  width: ${setWidth};
  height: ${props => props.h || 40}px;
  padding: 10px;

  font-family: inherit;
  font-weight: ${({ theme }) => theme.fontWeiths.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${setColor};

  background-color: ${setBackgroundColor};
  border-radius: ${({ theme }) => theme.radius.normal};
  box-shadow: ${setShadow};
  border: none;
  outline: none;

  transition: color 250ms ease;

  :not([disabled]):hover,
  :not([disabled]):focus-visible {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.buttonText};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: ${({ theme }) => theme.radius.normal};
    opacity: 0;
    transition: opacity 250ms ease;
  }

  :not([disabled]):hover::before,
  :not([disabled]):focus-visible::before {
    opacity: 1;
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

function setBackgroundColor({ shape, theme }) {
  switch (shape) {
    case 'solid':
      return `${theme.colors.link}`;
    default:
      return `transparent`;
  }
}

function setShadow({ shape, theme }) {
  switch (shape) {
    case 'solid':
      return `none`;
    default:
      return `inset 0px 0px 0px 2px ${theme.colors.link}`;
  }
}
