import styled from 'styled-components';

const setColor = props => {
  switch (props.shape) {
    case 'solid':
      return '#fef9f9';
    case 'yellow':
      return '#FFC107';
    default:
      return '#54ADFF';
  }
};

const setBackground = props => {
  switch (props.shape) {
    case 'solid':
      return 'linear-gradient(#54ADFF, #54ADFF)';
    case 'yellow':
      return 'inherit';
    default:
      return 'inherit';
  }
};

const setHoverBackground = props => {
  switch (props.shape) {
    case 'solid':
      return 'linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%)';
    case 'yellow':
      return '#FFC107';
    default:
      return 'linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%)';
  }
};

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${props => props.width};
  padding: 10px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.38;
  color: ${setColor};

  background: ${setBackground};
  border-radius: 40px;
  border: 1px solid;
  outline: none;

  transition-property: color, background;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:hover {
    color: #fef9f9;
    background: ${setHoverBackground};
  }
`;
