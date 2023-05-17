import styled from 'styled-components';

export const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const FriendsList = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 60px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
  }
`;

export const Friend = styled.li`
  font-family: 'Manrope';
  font-style: normal;

  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  width: 280px;
  min-height: 239px;
  height: fit;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 12px;
  border: none;

  @media screen and (min-width: 768px) {
    width: 336px;
    min-height: 275px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    min-height: 287px;
  }
`;
export const FriendTitle = styled.a`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  display: block;
  align-items: center;
  text-align: center;
  color: #54adff;

  transition: transform 250ms ease;
  :hover,
  :focus {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const FriendBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 12px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;
export const FriendImg = styled.img`
  width: 100px;
  height: 68px;
  justi @media screen and (min-width: 768px) {
    width: 124px;
    height: 88px;
  }

  @media screen and (min-width: 1280px) {
    width: 146px;
    height: 104px;
  }
`;

export const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    gap: 12px;
  }
`;

export const InfoItem = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: calc(16 / 12);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const InfoItemTitle = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: calc(16 / 12);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(19 / 14);
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: calc(22 / 16);
  }
`;
export const InfoItemText = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: calc(16 / 12);

  transition: color 250ms ease;
  &:hover {
    color: #54adff;
  }

  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 14px;
    line-height: calc(19 / 14);
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: calc(22 / 16);
  }
`;
export const InfoItemTime = styled.div`
  position: relative;
  font-weight: 500;
  font-size: 12px;
  line-height: calc(16 / 12);
  transition: color 250ms ease;
  cursor: ${props => (props.hasSchedule ? 'pointer' : 'default')};
  &:hover,
  &:focus {
    color: #54adff;
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const ScheduleField = styled.div`
  position: absolute;
  top: 100%;
  left: 10px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  font-weight: 500;
  font-size: 10px;
  line-height: calc(14 / 10);

  color: #111111;
  background: #ffffff;
  border: 1px solid #54adff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 8px;
  padding: 8px;
  z-index: 2;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: calc(16 / 12);
    padding: 12px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ScheduleRow = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 12px;
`;

export const ScheduleDay = styled.div`
  width: 20px;
`;

export const ScheduleTime = styled.div``;

export const InfoItemAddress = styled.a`
  display: block;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const InfoItemEmail = styled.a`
  display: block;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const InfoItemPhone = styled.a`
  display: block;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
