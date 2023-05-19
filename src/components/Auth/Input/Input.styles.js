import { Field } from 'formik';

import styled from 'styled-components';

export const InputPassword = styled(Field)`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid;
  border-color: ${props => props.error};
  border-radius: ${props => props.theme.radius.normal};
  background: ${props => props.theme.colors.backgroundModal};
  color: ${props => props.theme.colors.inputText};

  ::placeholder {
    font-weight: ${props => props.theme.fontWeiths.normal};
    font-size: ${props => props.theme.fontSizes.s};
    color: ${props => props.theme.colors.inputText};
  }
  :focus {
    outline: none;
  }
`;
export const Error = styled.p`
  font-weight: ${props => props.theme.fontWeiths.normal};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.red};
  padding-left: 12px;
  margin-top: 4px;
`;

export const Lable = styled.label`
  position: relative;
`;
export const AbsoluteDiv = styled.div`
  position: absolute;
  right: 17px;
  top: 17px;
  transform: translate(35%, -35%);
`;
export const ToggleBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;
