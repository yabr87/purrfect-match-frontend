import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 608px;
  width: 100%;
  box-shadow: ${props => props.theme.shadows.default};
  border-radius: 40px;
  @media (min-width: 768px) {
    width: 608px;
  }
`;
export const CenrteredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.background};

  height: 100%;
  padding: 0 20px;
  @media (min-width: 768px) {
    padding: 0 80px;
  }
  @media (min-width: 1240px) {
    padding: 0;
  }
`;
