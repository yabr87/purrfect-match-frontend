import { ErrorMessage, Field } from 'formik';
import Button from 'shared/components/Button';
import styled from 'styled-components';

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    bottom: 20px;
    right: 32px;
    transform: none;
  }
`;

export const FormTitle = styled.label`
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1.14;
  color: ${props => props.theme.colors.black};
  line-height: 1.35;
  margin-left: 12px;

   @media screen and (min-width: 768px) {
      font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const FormLabel = styled.label`
display: flex;
flex-direction: column;
font-weight: 500;
font-size: 20px;
line-height: 1.3;
`;

export const Error = styled(ErrorMessage)`
margin-top: 8px;
font-size: 14px;
color: red;`;

export const StyledField = styled(Field)`
display: block;
border: 1px solid #54ADFF;
border-radius: ${props => props.theme.radius.normal};
padding: 12px 16px;
margin-top: 8px;

font-weight: 400;
font-size: 14px;
line-height: 150%;

color: ${props => props.theme.colors.grey};
background: #fff;

@media screen and (min-width: 480px) {
  }

  @media screen and (min-width: 768px) {
  }`;

export const FormButton = styled(Button)`
    border: none;
    outline: none;

@media screen and (min-width: 768px) {
    width: 146px;


  }

`