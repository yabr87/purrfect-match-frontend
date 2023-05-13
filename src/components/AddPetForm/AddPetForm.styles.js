import styled from 'styled-components';

export const ButtonsBox = styled.div`
display: flex;
flex-direction: column-reverse;
  margin-top: auto;

  
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const FormTitle = styled.label`
font-weight: 500;
font-size: 28px;
line-height: 38px;
color: #111;
`;