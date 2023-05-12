import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormContainer = styled.div`
  width: 608px;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
`;
export const Forms = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 75px;
`;
export const CenrteredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;
export const StyledInput = styled(Field)`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #54adff;
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
