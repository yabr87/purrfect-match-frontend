import { Field, Form } from 'formik';
import styled from 'styled-components';

export const SearchForm = styled(Form)`
  max-width: 608px;
  height: 44px;
  position: relative;
  margin: 24px auto 0;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const SearchInput = styled(Field)`
  padding: 14px 71px 14px 20px;
  border: none;
  width: 100%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: #888888;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  margin: 0 auto;
  display: block;
  outline: none;

  @media screen and (min-width: 768px) {
    padding: 10px 71px 10px 20px;
    font-size: 20px;
    font-weight: 500;
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
