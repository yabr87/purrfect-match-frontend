import { ErrorMessage, Field } from 'formik';
import Button from 'shared/components/Button';
import styled from 'styled-components';

export const FormTitle = styled.p`
  margin-left: 12px;

  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1.35;

  color: ${props => props.theme.colors.black};

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

  color: ${props => props.theme.colors.grey};
  background: #fff;
  border-radius: ${props => props.theme.radius.normal};
  border: ${props =>
    props.errors ? '1px solid #F43F5E' : '1px solid #54adff'};
  outline: none;

  @media ${props => props.theme.media.tab}  {
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
  margin-top: auto;

  @media ${props => props.theme.media.tab} {
    justify-content: ${props => props.category !== 'my-pet' && 'center'};
    flex-direction: row;
    bottom: 20px;
    right: 32px;
  }
`;

export const FormButton = styled(Button)`
  border: none;
  outline: none;

  @media ${props => props.theme.media.tab} {
    width: 146px;
  }
`;
