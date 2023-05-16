import styled from 'styled-components';

export const CircleBtn = styled.button`
  z-index: ${prpops => prpops.z};
  position: ${prpops => prpops.pos};
  left: ${prpops => prpops.l};
  right: ${prpops => prpops.r};
  top: ${prpops => prpops.t};
  bottom: ${prpops => prpops.b};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  gap: 4px;

  width: ${setSize};
  height: ${setSize};

  font-family: 'Manrope';
  font-weight: ${({ theme }) => theme.fontWeiths.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.33;
  color: ${setColor};

  background: ${setBackground};
  border-radius: ${({ theme }) => theme.radius.round};
  border: none;
  outline: none;
  box-shadow: ${setBoxShadow};

  transition-property: color, background;
  transition-duration: 250ms;
  transition-timing-function: ease;

  :not([disabled]):hover,
  :not([disabled]):focus-visible {
    cursor: pointer;
    color: ${setHoverColor};
    background: ${setHoverBackground};
  }

  :active,
  :disabled {
    filter: opacity(0.6);
  }
`;

function setSize({ id }) {
  switch (id === 'heart' || id === 'trash') {
    case true:
      return `40px`;
    default:
      return `80px`;
  }
}

function setBackground({ id, theme }) {
  switch (id === 'heart' || id === 'trash') {
    case true:
      return `${theme.colors.lightBlue}`;
    default:
      return `linear-gradient(${theme.colors.link}, ${theme.colors.link})`;
  }
}

function setColor({ id, theme }) {
  switch (id === 'heart' || id === 'trash') {
    case true:
      return `${theme.colors.link}`;
    default:
      return `#ffffff`;
  }
}

function setBoxShadow({ id, theme }) {
  switch (id === 'heart' || id === 'trash') {
    case true:
      return `none`;
    default:
      return `${theme.shadows.default}`;
  }
}

function setHoverColor({ id, theme }) {
  switch (id === 'heart' || id === 'trash') {
    case true:
      return `${theme.colors.lightBlue}`;
    default:
      return `#ffffff`;
  }
}

function setHoverBackground({ id, theme }) {
  switch (id === 'heart' || id === 'trash') {
    case true:
      return `${theme.colors.link}`;
    default:
      return `${theme.colors.gradient}`;
  }
}
