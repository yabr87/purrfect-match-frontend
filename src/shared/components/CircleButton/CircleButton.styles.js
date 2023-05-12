import styled from 'styled-components';

export const CircleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;

  width: 80px;
  height: 80px;
  padding: 10px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  color: #ffffff;

  background: linear-gradient(#54adff, #54adff);
  border-radius: 50px;
  border: none;
  outline: none;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

  cursor: pointer;

  transition: background 250ms ease;

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }

  svg {
    margin-bottom: 4px;
  }
`;
