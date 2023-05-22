import styled from 'styled-components';

export const UserInput = styled.input`
  width: 100%;
  max-width: 190px;
  border: 1px solid ${props => props.theme.colors.link};
  border-radius: 20px;
  padding: 6px 12px;
  color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundModal};
  font-size: 12px;

  @media ${props => props.theme.media.tab} {
    width: 255px;
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const EditInputBtn = styled.button`
  position: absolute;
  right: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 2px;

   @media ${props => props.theme.media.tab} {
    right: 12px;
    padding: 4px;
   }

`;

export const UserLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${props => props.theme.colors.textColor};
  font-weight: ${props => props.theme.fontWeiths.semiBold};

  @media ${props => props.theme.media.tab} {
    font-size: 18px;
  }
`;
