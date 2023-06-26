import styled from 'styled-components';
import { EditField, EditLabel } from '../EditModal/EditModal.styles';
import { Form } from 'formik';

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 16px;

  @media ${props => props.theme.media.tab} {
    width: 608px;
    height: 354px;
  }
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 33px;
  text-align: center;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.textColor};

  @media ${props => props.theme.media.tab} {
    font-size: 36px;
    line-height: 49px;
    letter-spacing: 0.04em;
  }
`;

export const VerifyForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const VerifyField = styled(EditField)``;
export const VerifyLabel = styled(EditLabel)``;

// export const ButtonWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   @media ${props => props.theme.media.tab} {
//     display: flex;
//     flex-direction: row;
//   }
// `;
