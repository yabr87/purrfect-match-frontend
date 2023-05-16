import { Field } from 'formik';
import styled from 'styled-components';

export const MoreInfoWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 36px;
margin-bottom: 24px;
gap: 20px;
`

export const TextField = styled(Field)`
display: block;
padding: 8px 16px 10px;
width: 100%;
height: 92px;
resize: none;

font-size: 14px;
line-height: 150%;
letter-spacing: 0.04em;

background: #fff;
color: ${props => props.theme.colors.grey};
border: 1px solid #54ADFF;
border-radius: 20px;

::placeholder {
  font-family: ${props => props.theme.fonts.main};
}

@media screen and (min-width: 768px) {
  height: 79px;
  padding-top: 12px 16px 10px;
  }
`;

export const ImageLabel = styled.label`
display: flex;
align-items: center;
column-gap: 27px;
font-weight:  ${props => props.theme.fontWeiths.semi};
font-size: 14px;
line-height: 1.3;
`;

export const RadioLabel = styled.p`
font-weight:  ${props => props.theme.fontWeiths.semi};
  font-size: 14px;
  line-height: 1.3; 
  letter-spacing: 0.04em;
`

export const RadioBox = styled.div`
display: flex;
gap: 16px;
margin-top: 8px;`

export const MoreInfoRadio = styled.label`
display: flex;
align-items: center;
  cursor: pointer;
  gap: 12px;
  border-radius: 40px;

  font-weight:  ${props => props.theme.fontWeiths.normal};
  font-size: 14px;
  line-height: 1.3; 
  letter-spacing: 0.04em;

  background-color: transparent;
  color: ${props => props.checked ? '#00C3AD' : '#888'};

  input[type='radio'] {
    appearance: none;
    background-color: #fff;
    margin: 0;
  }
`;
