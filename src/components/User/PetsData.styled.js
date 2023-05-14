import styled from 'styled-components';

export const PetContainer = styled.div`
  width: 100%;
  height: auto;
  margin-left: auto;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  margin-top: 18px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const PetAvatar = styled.div`
  align-self: center;
  width: 240px;
  height: 240px;
  background: #54adff;
  border-radius: 20px;
  margin: 20px;

  @media screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
    margin-bottom: 108px;
  }
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
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    margin-right: 20px;
    flex-grow: 1;
    width: auto;
  }
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
