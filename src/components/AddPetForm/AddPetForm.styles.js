import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const FormTitle = styled.p`
  margin-left: 12px;

  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1.35;

  color: ${props => props.theme.colors.titleColor};

  @media ${props => props.theme.media.tab} {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 1.36;
    margin: 0;
    text-align: ${props =>
      props.category !== 'my-pet' && props.currentStep === 3 && 'center'};
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: 14px;
  line-height: 1.3;

  color: ${props => props.theme.colors.titleColor};
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const Error = styled(ErrorMessage)`
  margin-left: 16px;
  margin-top: 4px;
  font-size: 14px;
  color: ${props => props.theme.colors.red};

  font-size: 12px;
  line-height: 1.3;
`;

export const StyledField = styled(Field)`
  padding: 10px 16px;
  width: 100%;
  height: 40px;
  margin-top: 4px;

  font-family: ${props => props.theme.fonts.main};
  font-size: 14px;
  line-height: 150%;

  ::placeholder {
    font-family: ${props => props.theme.fonts.main};
  }

  color: ${props => props.theme.colors.inputText};
  background: ${props => props.theme.colors.backgroundModal};
  border-radius: ${props => props.theme.radius.normal};
  border: ${props =>
    props.errors ? '1px solid #F43F5E' : '1px solid #54adff'};
  outline: none;

  @media ${props => props.theme.media.tab} {
    margin-top: 8px;
    height: 48px;
    padding: 12px 16px;
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: 8px;
  margin-top: auto;

  @media ${props => props.theme.media.tab} {
    justify-content: ${props => props.category !== 'my-pet' && 'center'};
    flex-direction: row;
    bottom: 20px;
    right: 32px;
  }
`;

export const FormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 248px;
  height: 48px;
  gap: 12px;
  text-align: center;
  border: none;
  border-radius: ${props => props.theme.radius.normal};
  outline: none;
  cursor: pointer;

  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.37;
  font-weight: ${props => props.theme.fontWeiths.bold};
  letter-spacing: 0.04em;

  color: ${props => props.theme.colors.link};
  background-color: ${props => props.theme.colors.backgroundModal};
  transition: color 250ms ease, background 250ms ease;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.link};
    color: ${props => props.theme.colors.buttonText};
    outline: none;
  }

  @media ${props => props.theme.media.tab} {
    width: 146px;
  }
`;
