import { Field, Form } from 'formik';
import styled from 'styled-components';

export const SearchForm = styled(Form)`
  max-width: 608px;
  height: 44px;
  position: relative;
  margin: 24px auto 0;
  @media ${props => props.theme.media.tab} {
    margin-top: 40px;
  }
`;

export const SearchInput = styled(Field)`
  padding: 14px 71px 14px 20px;
  border: none;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.placeholders};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeiths.normal};
  font-size: ${({ theme }) => theme.fontSizes.search};
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.inputText};
  background-color: ${({ theme }) => theme.colors.inputBackground};
  box-shadow: ${({ theme }) => theme.shadows.default};
  border-radius: 20px;
  margin: 0 auto;
  display: block;
  outline: ${({ theme }) => theme.colors.inputOutline};

  @media ${props => props.theme.media.tab} {
    padding: 10px 71px 10px 20px;
    font-size: ${({ theme }) => theme.fontSizes.m};
    ${({ theme }) => theme.fontWeiths.semi};
    line-height: 1.2;
    max-width: 608px;
  }
`;

export const IconBlock = styled.div`
  display: flex;
  position: absolute;
  width: 78px;
  transform: translate(-100%, -50%);
  top: 50%;
  left: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const IconButton = styled.button`
  background-color: transparent;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  cursor: pointer;

  :last-child {
    margin-right: 13px;
    margin-left: 10px;
  }
`;
