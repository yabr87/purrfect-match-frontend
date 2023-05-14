import styled from 'styled-components';

export const Input = styled.input`
  width: 190px;
  border: 1px solid ${props => props.theme.colors.link};
  border-radius: 20px;
  padding: 4px 12px;
`;

export const EditInputBtn = styled.button`
  position: absolute;
  right: 12px;
  background-color: transparent;
  border: none;
`;
