import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonPage = styled(Link)`
  display: flex;
  color: #cce4fb;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border: 1px solid #cce4fb;
  border-radius: 50%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;

  &.current_page {
    color: #fef9f9;
    background-color: #54adff;
    border-color: #54adff;
  }
`;

export const Flex = styled.div`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fef9f9;

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 45px;
`;
export const Box = styled.div`
  margin: 60px auto 105px;
  width: 100%;
  max-width: 320px;
`;
