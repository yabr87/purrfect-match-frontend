import { Field } from 'formik';
import styled from 'styled-components';

export const SearchInput = styled(Field)`
  padding: 14px 20px;
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
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    max-width: 608px;
  }
`;
