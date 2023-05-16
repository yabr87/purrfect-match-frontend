import styled from 'styled-components';

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 496px;
  padding: 20px 8px 7px;

  background: #fff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: ${props => props.theme.radius.normal};

  @media screen and (min-width: 480px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 458px;
  }

  @media screen and (min-width: 768px) {
    padding: 32px 20px;
    min-height: 542px;
    padding: 20px 32px;
    width: 704px;
  }
`;
