import styled from 'styled-components';


export const FormBox = styled.div`
    width: 100%;
    min-height: 496px;

    background: #fff;
    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 40px;

    padding: 32px 8px;

  @media screen and (min-width: 480px) {
  margin-left: auto;
  margin-right: auto;
    max-width: 468px;
  }
  
  @media screen and (min-width: 768px) {
    padding: 32px 20px;
    min-height: 542px;
  }

  @media screen and (min-width: 1280px) {
  }
`