import styled from 'styled-components';

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

`;

export const FormTitle = styled.label`
  font-weight: 500;
  font-size: 28px;
  line-height: 1.14;
  color: #111;
`;

export const FormLabel = styled.label`
font-weight: 500;
font-size: 20px;
line-height: 1.3;
`