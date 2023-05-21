import styled from 'styled-components';

export const ButtonPage = styled.button`
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border: 1px solid #54adff;
  color: ${({ theme }) => theme.colors.link};
  border-radius: 50%;
  cursor: pointer;
  line-height: 0.94;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeiths.normal};
  font-family: ${({ theme }) => theme.fonts.placeholders};
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
  border: ${({ theme }) => theme.colors.pagginationOutline};
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
