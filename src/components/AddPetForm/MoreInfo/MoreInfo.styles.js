import { Field } from 'formik';
import styled from 'styled-components';

export const MoreInfoWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 40px;
gap: 24px;`

export const TextField = styled(Field)`
display: block;
border: 1px solid #54ADFF;
border-radius: 20px;
padding: 12px 16px;
margin-top: 8px;
min-height: 79px;
resize: none;

background: #fff;
`