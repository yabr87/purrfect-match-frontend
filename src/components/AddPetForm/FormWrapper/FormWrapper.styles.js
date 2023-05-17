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
    width: 458px;
  }

  @media ${props => props.theme.media.tab} {
    min-height: 542px;
    padding: 20px 32px;
    width: ${props =>
      props.category !== 'my-pet' && props.currentStep === 3 && '704px'};
  }
  @media ${props => props.theme.media.desk} {
    width: ${props =>
      props.category !== 'my-pet' && props.currentStep === 3 && '822px'};
    padding: ${props =>
      props.category !== 'my-pet' && props.currentStep === 3 && '20px 75px'};
  }
`;
