import { Field } from 'formik';
import styled from 'styled-components';

export const EditContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 44px 20px 16px 20px;
  width: 100%;

  @media and screen (min-width: 480px){
  width: 440px;
  }
  
  @media ${props => props.theme.media.tab} {
  width:704px;
    padding: 32px 32px 32px 32px;
  }
`;

export const EditWrapper = styled.div`
@media ${props => props.theme.media.tab} {
display: flex;
    gap: 20px;
    margin-bottom: 32px;
}`


export const EditLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: 12px;
  line-height: 1.3;
  
  color: ${props => props.theme.colors.titleColor};
  @media ${props => props.theme.media.tab} {
    font-size: 14px;
  }
`;

export const EditField = styled(Field)`
  padding: 10px 16px;
  width: 100%;
  height: 30px;
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

  @media ${props => props.theme.media.tab}  {
    margin-top: 8px;
    height: 40px;
    padding: 12px 16px;
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const EditText = styled(Field)`display: block;
  padding: 8px 16px 10px;
  width: 100%;
  height: 92px;
  resize: none;
  margin-top: 4px;

  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.04em;

  background: ${props => props.theme.colors.backgroundModal};
  color: ${props => props.theme.colors.inputText};
  border: ${props =>
    props.errors ? '1px solid #F43F5E' : '1px solid #54adff'};
  border-radius: 20px;

  ::placeholder {
    font-family: ${props => props.theme.fonts.main};
  }

  @media ${props => props.theme.media.tab} {
    margin-top: 8px;
    height: ${props =>
      props.errors ? '1px solid #F43F5E' : '1px solid #54adff'};
    padding-top: 12px 16px 10px;
  }
`