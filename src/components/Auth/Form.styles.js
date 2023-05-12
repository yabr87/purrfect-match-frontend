import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Field, Form } from 'formik';
export const Forms = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 75px;
`;
export const InputEmail = styled(Field)`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid;
  border-color: ${props => props.error};
  border-radius: 40px;

  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #888888;
  }
  :focus {
    outline: none;
  }
`;
export const InputPassword = styled(Field)`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid;
  border-color: ${props => props.error};
  border-radius: 40px;

  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #888888;
  }
  :focus {
    outline: none;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 60px;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #888888;
  margin-top: 20px;
`;

export const StyledLink = styled(Link)`
  color: #54adff;
`;
export const Error = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #f43f5e;
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
