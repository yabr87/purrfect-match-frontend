import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 288px;
  height: 456px;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 0px 0px 40px 40px;
  transition: transform 250ms ease;

  &:hover,
  &:focus {
    transform: perspective(800px) rotateX(5deg) rotateY(0deg) rotateZ(0deg);
  }

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 336px;
    max-width: 100%;
  }
`;

export const CardImageContainer = styled.div`
  position: relative;
`;

export const CardImage = styled.img`
  object-fit: cover;
  width: 288px;
  height: 288px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 336px;
    max-width: 100%;
  }
`;

export const ImageDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: white;
  padding: 10px;
`;

export const ImageDetailsItem = styled.p`
  height: 28px;
  min-width: 80px;
  white-space: nowrap;
  left: 12px;
  top: 248px;
  svg {
    margin-right: 8px;
  }

  background: #cce4fb;
  border-radius: 16px;
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 12px;

  padding: 5px;
  display: flex;
  align-items: center;

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

export const AddToFavoriteBtn = styled.button`
  z-index: 999;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  right: 12px;
  top: 12px;
  background: #cce4fb;
  border-radius: 50%;
  border: none;
  outline: none;
  transition: fill 250ms ease;

  &:hover svg,
  &:focus svg {
    fill: #54adff;
  }
`;
