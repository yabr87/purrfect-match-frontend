import styled from 'styled-components';

export const UserInput = styled.input`
  width: 100%;
  max-width: 190px;
  border: 1px solid ${props => props.theme.colors.link};
  border-radius: 20px;
  padding: 4px 12px;
  color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundModal};

  @media screen and (min-width: 768px) {
    width: 255px;
  }
`;

export const EditInputBtn = styled.button`
  position: absolute;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    right: 10px;
  }
`;

export const UserLabel = styled.label`
  color: ${props => props.theme.colors.textColor};

  font-weight: ${props => props.theme.fontWeiths.semiBold};
`;
