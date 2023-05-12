import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 288px;
  height: 456px;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 0px 0px 40px 40px;
`;

export const CardImageContainer = styled.div`
  position: relative;
`;

export const CardImage = styled.img`
  object-fit: cover;
  width: 288px;
  height: 288px;
`;

export const ImageDetails = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  gap: 12px;
  color: white;
  padding: 10px;
`;

export const ImageDetailsItem = styled.p`
  height: 28px;
  left: 12px;
  top: 248px;

  background: #cce4fb;
  border-radius: 16px;
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  padding: 5px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #111111;
`;

export const ImageCategory = styled.p`
  position: absolute;
  width: 126px;
  height: 32px;
  left: 0;
  top: 16px;
  display: flex;
  padding: 11px 17px;
  align-items: center;
  text-align: center;
  background: #cce4fb;
  border-radius: 0px 16px 16px 0px;
`;

export const PhotoDescription = styled.p`
  height: 66px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: #111111;
`;
export const BelowItemContainer = styled.div`
  padding: 20px;
`;
