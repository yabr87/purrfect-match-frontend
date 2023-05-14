import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Field, Form } from 'formik';
export const Forms = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 12px;
  @media (min-width: 481px) {
    padding: 60px 75px;
  }
`;
export const InputEmail = styled(Field)`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid;
  border-color: ${props => props.error};
  border-radius: ${props => props.theme.radius.normal};

  ::placeholder {
    font-weight: ${props => props.theme.fontWeiths.normal};
    font-size: ${props => props.theme.fontSizes.s};
    color: ${props => props.theme.colors.grey};
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
  border-radius: ${props => props.theme.radius.normal};

  ::placeholder {
    font-weight: ${props => props.theme.fontWeiths.normal};
    font-size: ${props => props.theme.fontSizes.s};
    color: ${props => props.theme.colors.grey};
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
  font-weight: ${props => props.theme.fontWeiths.normal};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 16px;
  color: ${props => props.theme.colors.grey};
  margin-top: 20px;
`;
export const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.link};
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
