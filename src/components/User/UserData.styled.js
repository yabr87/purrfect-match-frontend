import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-left: auto;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 182px;
  height: 182px;
  background: #54adff;
  border-radius: 40px;
  margin-top: 20px;
`;

export const EditBtn = styled.button`
  display: flex;
  gap: 8px;
  border: none;
  background-color: transparent;
  margin-top: 15px;
  align-items: center;
`;

export const BtnText = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
`;

export const InputContainer = styled.div`
  margin-top: 21px;
`;
