import { ErrorMessage, Field } from 'formik';
import Button from 'shared/components/Button';
import styled from 'styled-components';

export const FormTitle = styled.label`
  margin-left: 12px;

  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1.35;

  color: ${props => props.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 1.36;
    margin: 0;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: 14px;
  line-height: 1.3;
  gap: 4px;

   @media screen and (min-width: 768px) {
    gap: 8px;
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const Error = styled(ErrorMessage)`
  margin-top: 8px;
  font-size: 14px;
  color: red;

  font-family: ${props => props.theme.fontWeiths.semi};

  font-size: 14px;
`;

export const StyledField = styled(Field)`
  padding: 10px 16px;
  height: 40px;

  font-family: ${props => props.theme.fonts.main};
  font-size: 14px;
  line-height: 150%;

  ::placeholder {
    font-family: ${props => props.theme.fonts.main};
  }

  color: ${props => props.theme.colors.grey};
  background: #fff;
  border: 1px solid #54adff;
  border-radius: ${props => props.theme.radius.normal};

  @media screen and (min-width: 768px) {
    height: 48px;
    padding: 12px 16px;
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  margin-top: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    bottom: 20px;
    right: 32px;
  }
`;

export const FormButton = styled(Button)`
  border: none;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 146px;
  }
`;
