import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
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
export const Title = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: #000000;
`;

export const Avatar = styled.div`
  width: 182px;
  height: 182px;
  background: #54adff;
  border-radius: 40px;
  margin-top: 20px;
`;

export const EditAvatarBtn = styled.button`
  display: flex;
  gap: 8px;
  border: none;
  background-color: transparent;
  margin-top: 15px;
  align-items: center;
`;

export const LogOutBtn = styled.button`
  display: flex;
  align-self: flex-start;
  gap: 12px;
  border: none;
  background-color: transparent;
  margin-top: 21px;
  margin-bottom: 25px;
`;

export const BtnText = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
`;

export const LogOutText = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #888888;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 21px;
  padding: 0 8px;
  width: 100%;
`;
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
