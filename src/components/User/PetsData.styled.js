import styled from 'styled-components';

export const PetAvatar = styled.div`
  width: 240px;
  height: 240px;
  background: #54adff;
  border-radius: 20px;
  margin-top: 20px;
`;

export const PetHeader = styled.div`
  display: flex;
  margin-top: 46px;
  margin-bottom: 31px;
`;

export const PetInfoWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 20px 20px 40px 20px;
  align-items: flex-start;
`;

export const PetInfoItem = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: 0.04em;
`;

export const PetInfoTitle = styled.span`
  font-weight: 700;
`;

export const DelPetBtn = styled.button`
  position: absolute;
  right: 16px;
  border: none;
  background-color: transparent;
`;
