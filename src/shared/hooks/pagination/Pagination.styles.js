import styled from 'styled-components';

export const ButtonPage = styled.button`
  display: flex;
  color: ${({ theme }) => theme.colors.link};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border: 1px solid #54adff;
  border-radius: 50%;
  font-family: ${({ theme }) => theme.fonts.placeholders};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeiths.normal};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 0.94;
  background-color: transparent;

  &.current_page {
    color: ${({ theme }) => theme.colors.backgroundColor};
    background-color: ${({ theme }) => theme.colors.link};
    border-color: ${({ theme }) => theme.colors.link};
  }
`;

export const Flex = styled.div`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: transparent;
  outline: ${({ theme }) => theme.colors.pagginationOutline};
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 45px;
`;
export const Box = styled.div`
  margin: 60px auto 105px;
  width: 100%;
  max-width: 320px;
  display: flex;
  justify-content: center;
`;
